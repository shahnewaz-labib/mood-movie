from django.shortcuts import render
from django.http import JsonResponse

def hello_view(request):
    data = {
        "message": "Everything will be fine in the end, I promise."
    }
    return JsonResponse(data)

def upload_image(request):
    if request.method == 'POST' and request.FILES['image']:
        uploaded_image = request.FILES['image']
        # Process the image here
        # For example, you can save it to disk or perform further operations
        return HttpResponse("Image uploaded successfully!")
    else:
        return HttpResponse("No image uploaded.")