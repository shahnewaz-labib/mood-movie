# from deepface import DeepFace 
import cv2
import numpy as np

def getEmotion(image):
    img = cv2.imdecode(np.fromstring(image.read(), np.uint8), cv2.IMREAD_UNCHANGED)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    # result = DeepFace.analyze(img, actions=['emotion'])[0]["dominant_emotion"]
    result = "Sad"
    
    return result