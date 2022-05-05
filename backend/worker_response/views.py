from .models import WorkerResponse
from .serializers import WorkerResponseSerializer
from modulefinder import IMPORT_NAME
from rest_framework import status
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def workorders_list(request):
    if request.method == 'POST':
        serializer = WorkerResponseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        

@api_view(['GET', 'PUT', 'DELETE'])
def workorders_detail(request, pk):
    task = get_object_or_404(Workorders, pk=pk)
    if request.method == 'GET':
        serializer = WorkerResponseSerializer(task)
        return Response(serializer.data)
    elif request.method == 'PUT': 
        serializer = WorkerResponseSerializer(Workorders, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)