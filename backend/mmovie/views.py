from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
import cv2
import numpy as np
import os
import sys

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
import detectEmotion


@csrf_exempt
def upload_image(request):
    if request.method == "POST" and request.FILES["image"]:
        uploaded_image = request.FILES["image"]

        images_directory = "images"

        if not os.path.exists(images_directory):
            os.makedirs(images_directory)

        # Define the destination path where the image will be saved
        image_path = os.path.join("images", "temp.jpg")
        image_path = os.path.abspath(image_path)

        # Save the uploaded image to the destination path
        with open(image_path, "wb") as destination_file:
            for chunk in uploaded_image.chunks():
                destination_file.write(chunk)

        emotion = detectEmotion.getEmotion(image_path)
        data = {"emotion": emotion}

        os.remove(image_path)

        return JsonResponse(data)
    else:
        return JsonResponse({"emotion": None})
