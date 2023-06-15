from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

def hello_view(request):
    data = {
        "message": "Everything will be fine in the end, I promise."
    }
    return JsonResponse(data)


@csrf_exempt
def upload_image(request):
    if request.method == 'POST' and request.FILES['image']:
        uploaded_image = request.FILES['image']
        # Process the image here
        # For example, you can save it to disk or perform further operations
        return HttpResponse("Image uploaded successfully!")
    else:
        return HttpResponse("No image uploaded.")