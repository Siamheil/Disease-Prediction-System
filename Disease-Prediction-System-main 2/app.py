import json
import re
import urllib.parse
import urllib.request

import numpy as np
import pickle
import tensorflow as tf
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

model    = tf.keras.models.load_model("model/disease_model.keras")
encoder  = pickle.load(open("model/encoder.pkl", "rb"))
symptoms = pickle.load(open("model/symptoms.pkl", "rb"))



@app.route("/")
def home():
    """Render the symptom selection page."""
    return render_template("index.html", symptoms=symptoms)


@app.route("/result", methods=["POST"])
def result():
    """Process selected symptoms, run ANN model, return prediction page."""
    selected_symptoms = request.form.getlist("symptoms")

    input_vector = [0] * len(symptoms)
    for symptom in selected_symptoms:
        if symptom in symptoms:
            input_vector[symptoms.index(symptom)] = 1

    input_array = np.array(input_vector).reshape(1, -1)
    prediction  = model.predict(input_array)

    disease_index = np.argmax(prediction)
    disease       = encoder.inverse_transform([disease_index])[0]
    confidence    = round(float(prediction[0][disease_index]) * 100, 2)

    return render_template(
        "result.html",
        prediction=disease,
        confidence=confidence,
        selected_symptoms=selected_symptoms,
    )


@app.route("/disease-info")
def disease_info():
    """
    Fetch real-time disease information from the Wikipedia REST API.
    Returns JSON with description, causes, symptoms, remedies, prevention.
    Returns empty dict on failure so the front-end uses its local fallback.
    """
    disease_name = request.args.get("disease", "").strip()
    if not disease_name:
        return jsonify({"error": "No disease specified"}), 400

    try:
        encoded = urllib.parse.quote(disease_name.replace(" ", "_"))
        url     = f"https://en.wikipedia.org/api/rest_v1/page/summary/{encoded}"
        req     = urllib.request.Request(
            url, headers={"User-Agent": "DiseasePredictionApp/1.0"}
        )

        with urllib.request.urlopen(req, timeout=6) as resp:
            data    = json.loads(resp.read().decode("utf-8"))
            extract = data.get("extract", "")

        if not extract:
            return jsonify({}), 200

        sentences = [s.strip() for s in re.split(r'(?<=[.!?])\s+', extract) if s.strip()]
        description = " ".join(sentences[:3]) if sentences else extract[:400]

        cause_kw      = {"caus", "trigger", "result", "due to", "infect", "bacterium",
                          "virus", "parasite", "genetic", "hereditar", "autoimmun"}
        symptom_kw    = {"symptom", "sign", "present", "manifest", "character",
                          "pain", "ache", "fever", "fatigue", "nausea", "breath"}
        treatment_kw  = {"treat", "therap", "medic", "drug", "antibiotic", "surgery",
                          "manage", "cure", "relief", "remedy", "prescri"}
        prevention_kw = {"prevent", "avoid", "vaccin", "hygien", "protect", "screen",
                          "lifestyle", "diet", "exercise", "reduc"}

        causes = []; symp_list = []; treatment = []; prevention = []

        for s in sentences[3:]:
            sl = s.lower()
            if   any(k in sl for k in cause_kw)      and len(causes)    < 3: causes.append(s)
            elif any(k in sl for k in symptom_kw)     and len(symp_list) < 3: symp_list.append(s)
            elif any(k in sl for k in treatment_kw)   and len(treatment) < 3: treatment.append(s)
            elif any(k in sl for k in prevention_kw)  and len(prevention)< 3: prevention.append(s)

        used = set(causes + symp_list + treatment + prevention)
        remaining = [s for s in sentences[3:] if s not in used]
        for bucket in [causes, symp_list, treatment, prevention]:
            while len(bucket) < 1 and remaining:
                bucket.append(remaining.pop(0))

        wiki_url = data.get("content_urls", {}).get("desktop", {}).get("page", "")

        return jsonify({
            "description": description,
            "causes":      causes,
            "symptoms":    symp_list,
            "remedies":    treatment,
            "prevention":  prevention,
            "source":      wiki_url,
        })

    except Exception:
        return jsonify({}), 200 


if __name__ == "__main__":
    app.run(debug=True)
