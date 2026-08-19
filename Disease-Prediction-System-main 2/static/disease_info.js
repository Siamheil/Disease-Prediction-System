const DISEASE_INFO = {
  "diabetes": {
    description: "A chronic metabolic disease characterised by elevated blood glucose levels resulting from defects in insulin production, insulin action, or both. Affects hundreds of millions worldwide and is a leading cause of blindness, kidney failure, and cardiovascular disease.",
    causes:  ["Insufficient insulin production by the pancreas (Type 1)", "Insulin resistance in body cells (Type 2)", "Genetic predisposition and family history", "Obesity, physical inactivity, and poor diet", "Autoimmune destruction of beta cells (Type 1)"],
    symptoms: ["Excessive thirst and frequent urination", "Unexplained weight loss or gain", "Blurred vision and slow-healing wounds", "Fatigue and lack of energy", "Tingling or numbness in hands and feet"],
    remedies: ["Monitor blood glucose levels regularly", "Take prescribed insulin or oral medications", "Follow a balanced, low-glycaemic diet", "Regular physical activity (30 min/day)", "Routine check-ups with an endocrinologist"],
    prevention: ["Maintain a healthy body weight", "Eat a diet rich in fibre and low in refined sugars", "Exercise regularly — at least 150 minutes per week", "Avoid smoking and limit alcohol", "Annual blood sugar screening if at risk"]
  },
  "hypertension": {
    description: "A common condition in which the force of blood against artery walls is persistently too high, often called the 'silent killer' because it may have no symptoms yet cause serious complications including heart attack and stroke.",
    causes: ["High sodium intake and poor diet", "Physical inactivity and obesity", "Chronic stress and poor sleep", "Kidney disease or hormonal disorders", "Genetic factors and family history"],
    symptoms: ["Often no symptoms (silent condition)", "Headaches and dizziness", "Shortness of breath during exertion", "Nosebleeds (in severe cases)", "Visual disturbances"],
    remedies: ["Take antihypertensive medication as prescribed", "Reduce sodium intake to below 2g per day", "Follow the DASH diet (fruits, vegetables, low-fat dairy)", "Exercise regularly and lose excess weight", "Limit alcohol and avoid smoking"],
    prevention: ["Maintain a healthy weight and BMI", "Eat a low-sodium, plant-rich diet", "Exercise at least 30 minutes most days", "Manage stress with relaxation techniques", "Regular blood pressure monitoring"]
  },
  "flu": {
    description: "A contagious respiratory illness caused by influenza viruses that infect the nose, throat, and lungs. It can range from mild to severe and can lead to hospitalisation or death, especially in vulnerable groups.",
    causes: ["Influenza A, B, or C virus infection", "Spread through respiratory droplets from coughing or sneezing", "Contact with contaminated surfaces then touching eyes, nose, or mouth", "Seasonal mutations of the influenza virus", "Weakened immune system"],
    symptoms: ["Sudden high fever and chills", "Severe muscle aches and body pain", "Cough, sore throat, and runny nose", "Headaches and fatigue", "Vomiting and diarrhoea (more common in children)"],
    remedies: ["Rest and stay well-hydrated", "Take antiviral medications (e.g. oseltamivir) if prescribed", "Use paracetamol or ibuprofen for fever and pain", "Stay home to avoid spreading the virus", "Seek medical care if breathing difficulty develops"],
    prevention: ["Get annual flu vaccination", "Wash hands frequently with soap for 20 seconds", "Avoid close contact with sick individuals", "Cover coughs and sneezes with a tissue", "Avoid touching face with unwashed hands"]
  },
  "pneumonia": {
    description: "An infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing cough, fever, chills, and difficulty breathing. It can range from mild to life-threatening.",
    causes: ["Bacterial infection (most common: Streptococcus pneumoniae)", "Viral infections (influenza, COVID-19)", "Fungal infections (in immunocompromised individuals)", "Aspiration of food or liquids into lungs", "Hospital-acquired infections"],
    symptoms: ["Productive cough with greenish or blood-tinged phlegm", "Fever, sweating, and chills", "Shortness of breath even at rest", "Chest pain that worsens with breathing", "Fatigue and confusion (especially in elderly)"],
    remedies: ["Antibiotics for bacterial pneumonia (complete full course)", "Rest and adequate fluid intake", "Fever reducers and cough medicine as needed", "Hospitalisation for severe cases or oxygen therapy", "Breathing exercises during recovery"],
    prevention: ["Get vaccinated (pneumococcal and flu vaccines)", "Wash hands regularly", "Do not smoke — it damages lung defences", "Maintain a strong immune system with healthy habits", "Seek prompt treatment for respiratory infections"]
  },
  "malaria": {
    description: "A life-threatening disease caused by Plasmodium parasites transmitted to humans through bites of infected female Anopheles mosquitoes. It is preventable and curable but remains a major global health problem.",
    causes: ["Plasmodium falciparum (most deadly), P. vivax, P. ovale, P. malariae parasites", "Bite of infected female Anopheles mosquito", "Blood transfusions from infected donors (rare)", "Mother-to-child transmission during pregnancy", "Sharing needles with infected persons"],
    symptoms: ["Cyclical high fever and chills", "Profuse sweating after fever breaks", "Headaches and muscle pain", "Nausea and vomiting", "Anaemia and jaundice in severe cases"],
    remedies: ["Artemisinin-based combination therapies (ACTs) for P. falciparum", "Chloroquine for P. vivax in sensitive areas", "Supportive care: fluid replacement, fever management", "Hospitalisation for severe malaria with IV artesunate", "Prevent mosquito bites during treatment period"],
    prevention: ["Sleep under insecticide-treated bed nets (ITNs)", "Use DEET-based mosquito repellents", "Wear long-sleeved clothing at dawn and dusk", "Take antimalarial prophylaxis when travelling to endemic areas", "Eliminate standing water around the home"]
  },
  "dengue fever": {
    description: "A mosquito-borne viral disease widespread in tropical and subtropical regions. Caused by the dengue virus transmitted by Aedes mosquitoes, dengue fever can develop into dengue haemorrhagic fever — a potentially fatal condition.",
    causes: ["Dengue virus (DENV serotypes 1–4) transmitted by Aedes aegypti mosquito", "Secondary infection with a different DENV serotype increases severe disease risk", "No person-to-person transmission", "Urban environments with stagnant water breeding mosquitoes"],
    symptoms: ["Sudden high fever (up to 40°C / 104°F)", "Severe headache and pain behind the eyes", "Muscle, joint, and bone pain ('breakbone fever')", "Skin rash appearing 2–5 days after fever onset", "Mild bleeding (nosebleed, gum bleeding) in some cases"],
    remedies: ["No specific antiviral treatment; supportive care only", "Paracetamol for fever (avoid aspirin and NSAIDs)", "Oral rehydration to replace fluids", "Hospitalisation if platelet count drops dangerously", "Close monitoring for warning signs of severe dengue"],
    prevention: ["Eliminate mosquito breeding sites (empty standing water)", "Use mosquito repellents and wear protective clothing", "Use mosquito nets in sleeping areas", "Install window and door screens", "Get vaccinated if approved for your age group and region"]
  },
  "tuberculosis": {
    description: "A potentially serious infectious disease caused by Mycobacterium tuberculosis that mainly affects the lungs. It spreads through the air when infected persons cough, spit, speak, or sneeze.",
    causes: ["Mycobacterium tuberculosis bacterium", "Airborne transmission from person to person", "Close contact with active TB patient", "Weakened immune system (HIV, malnutrition, diabetes)", "Overcrowded living conditions and poor ventilation"],
    symptoms: ["Persistent cough lasting 3+ weeks", "Coughing up blood or blood-streaked sputum", "Chest pain and shortness of breath", "Unexplained weight loss and night sweats", "Fatigue, fever, and chills"],
    remedies: ["6-month course of first-line antibiotics (isoniazid, rifampicin, pyrazinamide, ethambutol)", "Never stop medication early — incomplete treatment causes drug resistance", "Directly Observed Therapy (DOT) to ensure adherence", "Isolation during infectious period", "Nutritional support to aid recovery"],
    prevention: ["BCG vaccination in infancy (especially in high-burden countries)", "Ensure good ventilation in living spaces", "Wear mask if caring for active TB patient", "Complete preventive therapy if tested latent TB-positive", "Regular TB screening for high-risk groups"]
  },
  "typhoid fever": {
    description: "A systemic bacterial infection caused by Salmonella typhi, transmitted through contaminated food and water. Without prompt treatment it can be life-threatening; globally it affects millions each year.",
    causes: ["Salmonella typhi ingested through contaminated food or water", "Poor sanitation and inadequate hand hygiene", "Consuming raw produce washed with contaminated water", "Faecal-oral transmission from infected individuals", "Travel to endemic regions without vaccination"],
    symptoms: ["Sustained high fever (39–40°C) that rises gradually", "Weakness, fatigue, and headache", "Stomach pain, diarrhoea, or constipation", "Rose-coloured spots on the torso", "Loss of appetite and nausea"],
    remedies: ["Antibiotics: azithromycin, ceftriaxone, or fluoroquinolones", "Complete full antibiotic course to prevent relapse", "Oral rehydration solutions to maintain fluid balance", "Rest and nutritious food during recovery", "Isolate patient and practice strict hand hygiene"],
    prevention: ["Get typhoid vaccine before travelling to endemic areas", "Drink only bottled or boiled water", "Avoid raw foods, salads, and street food in high-risk areas", "Wash hands thoroughly with soap before eating", "Ensure proper sanitation and sewage disposal"]
  },
  "chickenpox": {
    description: "A highly contagious viral infection causing an itchy, blister-like rash. Caused by the varicella-zoster virus, it mainly affects children but can occur at any age; the virus can reactivate later as shingles.",
    causes: ["Varicella-zoster virus (VZV)", "Airborne transmission from coughing or sneezing", "Direct contact with fluid from blisters", "No prior vaccination or infection", "Close contact in schools, households, or daycares"],
    symptoms: ["Itchy red spots that progress to fluid-filled blisters", "Fever and general malaise", "Fatigue and loss of appetite", "Headache before rash appears", "Blisters crust over within 5–7 days"],
    remedies: ["Calamine lotion and antihistamines to relieve itching", "Paracetamol for fever (never aspirin in children)", "Antiviral medication (acyclovir) for high-risk individuals", "Keep nails short and avoid scratching to prevent secondary infection", "Isolate until all blisters have crusted over"],
    prevention: ["Varicella vaccine (2 doses) is the best protection", "Avoid contact with infected individuals", "Keep children home from school until non-infectious", "Post-exposure varicella immunoglobulin for high-risk contacts", "Maintain good hand hygiene"]
  },
  "common cold": {
    description: "A viral infection of the upper respiratory tract, most commonly caused by rhinoviruses. It is the most frequent infectious disease in humans, typically mild and self-limiting.",
    causes: ["Rhinovirus (most common), coronavirus, RSV, adenovirus", "Inhalation of virus-laden droplets from infected persons", "Touching contaminated surfaces then touching face", "Cold or dry weather conditions that favour viral survival", "Weakened immune system or fatigue"],
    symptoms: ["Runny or stuffy nose", "Sore throat and mild hoarseness", "Cough and sneezing", "Mild body aches and low-grade fever", "General feeling of being unwell"],
    remedies: ["Rest and drink plenty of fluids", "Saline nasal sprays for congestion", "Throat lozenges or warm saltwater gargles for sore throat", "Over-the-counter decongestants or antihistamines", "Honey and ginger tea for soothing relief"],
    prevention: ["Wash hands frequently and thoroughly", "Avoid touching eyes, nose, and mouth", "Stay away from people with active colds", "Disinfect frequently touched surfaces", "Maintain good overall health with sleep, diet, and exercise"]
  },
  "asthma": {
    description: "A chronic condition in which the airways narrow, swell, and may produce extra mucus, making breathing difficult. It ranges from a minor nuisance to a life-threatening condition.",
    causes: ["Allergens: pollen, dust mites, mold, pet dander", "Air pollutants, smoke, and strong odours", "Respiratory infections (viral)", "Exercise-induced bronchoconstriction", "Genetic predisposition (family history of atopy)"],
    symptoms: ["Shortness of breath and chest tightness", "Wheezing — a whistling sound when breathing", "Frequent coughing, especially at night", "Trouble sleeping due to breathing difficulty", "Breathing problems triggered by exercise"],
    remedies: ["Use prescribed quick-relief inhaler (short-acting beta-agonist)", "Take long-term control medication (inhaled corticosteroids) regularly", "Follow an Asthma Action Plan", "Monitor peak flow readings", "Avoid known triggers and allergens"],
    prevention: ["Identify and reduce exposure to personal triggers", "Keep indoor air clean — use HEPA filters, vacuum regularly", "Do not smoke and avoid secondhand smoke", "Get annual flu vaccine", "Take preventive medication before known triggers (e.g. exercise)"]
  },
  "depression": {
    description: "A mood disorder causing a persistent feeling of sadness and loss of interest. It affects how you feel, think, and handle daily activities and can lead to various emotional and physical problems.",
    causes: ["Imbalance in brain neurotransmitters (serotonin, dopamine)", "Traumatic life events or chronic stress", "Genetic predisposition and family history", "Chronic illness or pain conditions", "Social isolation, substance abuse, or hormonal changes"],
    symptoms: ["Persistent sad, anxious, or empty mood", "Loss of interest in previously enjoyable activities", "Fatigue and decreased energy", "Changes in sleep (insomnia or oversleeping)", "Difficulty concentrating, making decisions, or remembering"],
    remedies: ["Psychotherapy: Cognitive Behavioural Therapy (CBT), talk therapy", "Antidepressant medications as prescribed by a doctor", "Regular physical exercise (shown to improve mood)", "Social support from family, friends, or support groups", "Mindfulness and stress-reduction practices"],
    prevention: ["Build strong social connections and support networks", "Exercise regularly and maintain healthy sleep habits", "Seek help early at first signs of persistent low mood", "Limit alcohol and avoid recreational drugs", "Practice self-care and stress management daily"]
  },
  "heart attack": {
    description: "A medical emergency that occurs when blood flow to a part of the heart muscle is blocked, usually by a blood clot. Without blood, the heart muscle begins to die. Rapid treatment is critical to survival.",
    causes: ["Coronary artery disease (plaque build-up)", "Blood clot blocking a coronary artery", "Severe coronary artery spasm", "Risk factors: high cholesterol, hypertension, diabetes, smoking", "Obesity and physical inactivity"],
    symptoms: ["Chest pain, pressure, or squeezing (lasting more than a few minutes)", "Pain radiating to the left arm, jaw, neck, or back", "Shortness of breath with or without chest discomfort", "Cold sweat, nausea, or light-headedness", "Women may experience unusual fatigue or abdominal pain"],
    remedies: ["Call emergency services IMMEDIATELY (time = heart muscle)", "Chew 325mg aspirin if not allergic", "Percutaneous coronary intervention (PCI / angioplasty) to unblock artery", "Thrombolytic drugs to dissolve the clot", "Cardiac rehabilitation after event for long-term recovery"],
    prevention: ["Maintain healthy blood pressure and cholesterol", "Stop smoking — risk drops rapidly after quitting", "Exercise regularly and maintain healthy weight", "Control diabetes and blood sugar", "Eat a heart-healthy diet (Mediterranean-style)"]
  },
  "stroke": {
    description: "A brain attack that occurs when the blood supply to part of the brain is cut off, killing brain cells. Every minute counts — rapid treatment can limit damage and save lives. Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services.",
    causes: ["Ischaemic stroke: blood clot blocking a brain artery (most common)", "Haemorrhagic stroke: ruptured blood vessel in the brain", "High blood pressure (leading risk factor)", "Atrial fibrillation (irregular heartbeat causing clots)", "Smoking, diabetes, high cholesterol, and carotid artery disease"],
    symptoms: ["Sudden numbness or weakness in face, arm, or leg (especially one side)", "Sudden confusion, trouble speaking, or understanding speech", "Sudden vision problems in one or both eyes", "Sudden severe headache with no known cause", "Sudden dizziness, loss of balance, or loss of coordination"],
    remedies: ["Call emergency services IMMEDIATELY — act FAST", "IV thrombolysis (tPA) within 4.5 hours for ischaemic stroke", "Mechanical thrombectomy for large vessel occlusion", "Blood pressure control and anti-clotting medications", "Intensive rehabilitation: physiotherapy, speech therapy, occupational therapy"],
    prevention: ["Control blood pressure — the single most important preventive measure", "Stop smoking and avoid secondhand smoke", "Manage atrial fibrillation with anticoagulants if prescribed", "Regular exercise and maintain healthy weight", "Limit alcohol and eat a low-sodium, heart-healthy diet"]
  },
  "urinary tract infection": {
    description: "An infection in any part of the urinary system — kidneys, ureters, bladder, or urethra. Most infections involve the lower tract (bladder and urethra) and are far more common in women.",
    causes: ["Escherichia coli bacteria from the digestive tract (most common)", "Sexual activity increasing bacteria entry", "Urinary catheters providing a pathway for bacteria", "Urinary tract abnormalities blocking urine flow", "Menopause-related changes in urinary tract lining"],
    symptoms: ["Burning sensation when urinating", "Frequent, urgent need to urinate (little urine produced)", "Cloudy, dark, or strong-smelling urine", "Pelvic pain in women, rectal pain in men", "Fever and chills if infection has spread to kidneys"],
    remedies: ["Antibiotics as prescribed (trimethoprim, nitrofurantoin, cephalexin)", "Complete the full antibiotic course even if symptoms improve", "Drink plenty of water to flush bacteria", "Urinary analgesics (phenazopyridine) for pain relief", "Seek medical care if fever develops (possible kidney infection)"],
    prevention: ["Drink 6–8 glasses of water daily", "Urinate after sexual intercourse", "Wipe from front to back after using the toilet", "Avoid irritating feminine hygiene products", "Wear breathable cotton underwear and avoid tight-fitting clothing"]
  },
  "acne": {
    description: "A common skin condition when hair follicles become plugged with oil and dead skin cells, leading to whiteheads, blackheads, pimples, or cysts. It primarily affects adolescents but can occur at any age.",
    causes: ["Excess sebum (oil) production by sebaceous glands", "Propionibacterium acnes bacterial overgrowth", "Hormonal changes during puberty, pregnancy, or menstruation", "Certain medications (corticosteroids, lithium)", "High-glycaemic diet and dairy consumption in susceptible individuals"],
    symptoms: ["Whiteheads (closed plugged pores)", "Blackheads (open plugged pores)", "Papules (small red, tender bumps)", "Pimples (pustules) with pus at tips", "Nodules and cysts (large, painful lumps that can cause scarring)"],
    remedies: ["Benzoyl peroxide or salicylic acid topical treatments", "Retinoids (adapalene, tretinoin) to unclog pores", "Topical or oral antibiotics for inflammatory acne", "Isotretinoin for severe, cystic acne (under medical supervision)", "Gentle, non-comedogenic skincare routine twice daily"],
    prevention: ["Wash face gently twice daily with a mild cleanser", "Use non-comedogenic (won't clog pores) moisturisers and makeup", "Avoid squeezing or picking pimples", "Shower after sweating and change pillowcases frequently", "Manage stress — it worsens hormonal acne"]
  },
  "migraine": {
    description: "A neurological disease characterised by recurring episodes of moderate to severe headache, usually on one side of the head, often accompanied by nausea, vomiting, and extreme sensitivity to light and sound.",
    causes: ["Neurological changes in brain activity and blood flow", "Hormonal fluctuations (especially oestrogen in women)", "Triggers: certain foods, alcohol, caffeine, stress, irregular sleep", "Genetic predisposition (family history)", "Environmental factors: strong lights, smells, weather changes"],
    symptoms: ["Intense, throbbing headache (often one-sided)", "Nausea and vomiting", "Extreme sensitivity to light (photophobia) and sound (phonophobia)", "Visual aura: flashing lights, blind spots, zigzag patterns", "Pain that worsens with physical activity"],
    remedies: ["Triptans (sumatriptan) for acute migraine attacks", "NSAIDs (ibuprofen, naproxen) taken at onset", "Rest in a quiet, dark room", "Apply ice packs to the forehead or neck", "Preventive medications (topiramate, beta-blockers, antidepressants) if frequent"],
    prevention: ["Keep a headache diary to identify personal triggers", "Maintain regular sleep, meal, and exercise schedules", "Stay well hydrated throughout the day", "Limit caffeine and alcohol", "Manage stress with yoga, meditation, or biofeedback"]
  },
  "anemia": {
    description: "A condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues. Anaemia can make you feel tired and weak. It has many causes, ranging from nutritional deficiencies to chronic disease.",
    causes: ["Iron deficiency (most common) from poor diet or blood loss", "Vitamin B12 or folate deficiency", "Chronic diseases (kidney disease, cancer, inflammatory conditions)", "Haemolytic anaemia: red blood cells destroyed too quickly", "Bone marrow disorders or aplastic anaemia"],
    symptoms: ["Persistent fatigue and weakness", "Pale or yellowish skin, nail beds, and eyes", "Shortness of breath on minimal exertion", "Dizziness and light-headedness", "Cold hands and feet, irregular heartbeat"],
    remedies: ["Iron supplements (ferrous sulfate) for iron-deficiency anaemia", "B12 injections or supplements for deficiency", "Dietary changes: red meat, leafy greens, legumes, fortified cereals", "Treat underlying condition causing chronic anaemia", "Blood transfusions in severe cases"],
    prevention: ["Eat an iron-rich diet: meat, fish, beans, dark leafy greens", "Consume vitamin C with iron-rich foods to boost absorption", "Avoid tea and coffee with iron-rich meals (they inhibit absorption)", "Women of reproductive age: regular iron screening", "Folic acid supplementation during pregnancy"]
  }
};

/**
 * getDiseaseInfo(diseaseName)
 * Returns a structured info object for the given disease.
 * Falls back to a generic informational response if the disease is not in the database.
 *
 * @param {string} diseaseName - lowercase disease name
 * @returns {{ description, causes, symptoms, remedies, prevention }}
 */
function getDiseaseInfo(diseaseName) {
  const key = diseaseName.toLowerCase().trim();

  if (DISEASE_INFO[key]) return DISEASE_INFO[key];

  for (const dbKey of Object.keys(DISEASE_INFO)) {
    if (key.includes(dbKey) || dbKey.includes(key)) {
      return DISEASE_INFO[dbKey];
    }
  }

  return {
    description: `${diseaseName} is a medical condition identified by the AI model. For accurate and personalised information, please consult a qualified healthcare professional.`,
    causes:  ["Various biological, environmental, and lifestyle factors may contribute.", "Genetic susceptibility may play a role in some individuals.", "Consult a healthcare provider for a full evaluation."],
    symptoms: ["Symptoms vary by individual and severity.", "Please consult a doctor for a proper clinical assessment.", "Do not self-diagnose based on AI predictions alone."],
    remedies:  ["Seek professional medical diagnosis and treatment.", "Follow prescribed medication and treatment plans.", "Regular follow-up appointments with your healthcare provider."],
    prevention: ["Maintain a healthy lifestyle with balanced diet and regular exercise.", "Get regular medical check-ups and screenings.", "Follow public health guidelines for disease prevention."]
  };
}
