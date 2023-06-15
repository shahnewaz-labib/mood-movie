from deepface import DeepFace 
import cv2

def getEmotion():
    img = cv.imread("image.jpg")
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    result = DeepFace.analyze(img, actions=['emotion'])[0]["dominant_emotion"]
    
    return result