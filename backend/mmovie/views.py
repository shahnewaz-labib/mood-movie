from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
import cv2
import numpy as np 
# from detectEmotion import getEmotion
import cv2
import numpy as np


@csrf_exempt
def upload_image(request):

    if request.method == 'POST' and request.FILES['image']:
        uploaded_image = request.FILES['image']

        # Open the uploaded image using PIL
        # image = Image.open(uploaded_image)
        # image.show()

        # emotion = detectEmotion.getEmotion(uploaded_image)

        img = cv2.imdecode(np.fromstring(uploaded_image.read(), np.uint8), cv2.IMREAD_UNCHANGED)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        # result = DeepFace.analyze(img, actions=['emotion'])[0]["dominant_emotion"]
        result = "Sad"

        data = {
            "emotion": result
        }


        return JsonResponse(data)
    else:
        return JsonResponse({"emotion": None})