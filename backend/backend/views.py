from django.shortcuts import render
from django.http import JsonResponse

def hello_view(request):
    data = {
        "message": "Everything will be fine in the end, I promise."
    }
    return JsonResponse(data)

