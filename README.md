# 🩺 Disease Prediction System using Machine Learning

## 📌 Overview
The Disease Prediction System is a machine learning-based web application that predicts possible diseases based on user-input symptoms. The system uses an Artificial Neural Network (ANN) model trained on a medical dataset to provide accurate and fast predictions.

This project aims to assist users in identifying potential health conditions at an early stage and encourages informed decision-making.

---

## 🚀 Features
- 🔍 Predict diseases based on selected symptoms
- 🤖 Machine Learning model using Artificial Neural Network (ANN)
- 🌐 User-friendly web interface using Flask
- ⚡ Fast and real-time predictions
- 📊 Multi-class classification using Softmax activation
- 📋 Displays predicted disease along with basic information and remedies *(extendable)*

---

## 🛠️ Tech Stack

### 💻 Programming & Frameworks
- Python
- Flask

### 📊 Libraries
- TensorFlow / Keras
- NumPy
- Pandas
- Scikit-learn

### 🌐 Frontend
- HTML
- CSS
- JavaScript

---

## 🧠 Machine Learning Model
- Model Type: Artificial Neural Network (ANN)
- Input Layer: Symptoms (binary encoded)
- Hidden Layers: Multiple Dense layers with ReLU activation
- Output Layer: Softmax activation for multi-class disease prediction
- Loss Function: Categorical Crossentropy
- Optimizer: Adam

---

## 📂 Project Structure
  │── model/
  │ ├── disease_model.keras
  │ ├── encoder.pkl
  │ ├── symptoms.pkl
  │
  │── static/
  │ ├── index.css
  │ ├── result.css
  │ ├── disease_info.js
  │
  │── templates/
  │ ├── index.html
  │ ├── result.html
  │
  │── app.py
  │── model_training.ipynb
  │── README.md
