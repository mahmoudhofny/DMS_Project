from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model # type: ignore
from tensorflow.keras.preprocessing.image import img_to_array, load_img # type: ignore
import numpy as np
import io
from PIL import Image

app = Flask(__name__)

# Load the model
model = load_model("trained_model.h5")

def preprocess_image(image, target_size):
    if image.mode != "RGB":
        image = image.convert("RGB")
    image = image.resize(target_size)
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)
    image = image / 255.0
    return image

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]
    image = Image.open(io.BytesIO(file.read()))
    processed_image = preprocess_image(image, target_size=(500, 500))

    prediction = model.predict(processed_image)

    label = "With_ID" if prediction[0][0] >= 0.5 else "Without_ID"

    return jsonify({"prediction": label})

if __name__ == "__main__":
    app.run(debug=True)
