import tensorflow as tf
import cv2
import numpy as np
from keras.preprocessing import image
import os
import sys


def getEmotion(image_path):
    label_dict = {
        0: "Angry",
        1: "Disgust",
        2: "Fear",
        3: "Happy",
        4: "Neutral",
        5: "Sad",
        6: "Surprise",
    }

    # sys.path.append(os.path.dirname(os.path.abspath(__file__)))
    model_path = os.path.join("mmovie", "models", "model_optimal2.h5")
    model_path = os.path.abspath(model_path)

    model = tf.keras.models.load_model(model_path)

    # img = tf.keras.preprocessing.image.load_img(
    #     image_path, target_size=(48, 48), color_mode="grayscale"
    # )
    img = tf.keras.preprocessing.image.load_img(image_path, target_size=(64, 64,3), color_mode='rgb')

    img = tf.keras.preprocessing.image.img_to_array(img)
    img = np.expand_dims(img, axis=0)

    img = img / 255.0

    result = model.predict(img)
    result = list(result[0])

    emotion_index = result.index(max(result))

    predicted_emotion = label_dict[emotion_index]

    return predicted_emotion
