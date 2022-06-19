
from .models import Workorders
from .serializers import WorkorderSerializers
from modulefinder import IMPORT_NAME
from rest_framework import status
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def get_all_workorders(request):
    # GETS ALL WORKORDERS 

    if request.method == 'GET':
        resident = Workorders.objects.filter(resident__id = request.user.id)
        if resident:
            serializer = WorkorderSerializers(resident, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.user.role == "Maintenance" or request.user.role == "Management":
            workorders = Workorders.objects.all()
            serializer = WorkorderSerializers(workorders, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response([],status = status.HTTP_200_OK)
    # TENTANT FEATURE TO CREATE A WORKORDER
    elif request.method == 'POST':
        serializer = WorkorderSerializers(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def workorder_details(request,pk):
    # GETTING A WORKORDER BY THE PK
    workorder = get_object_or_404(Workorders, pk=pk)
    if request.method == 'GET':
        serializer = WorkorderSerializers(workorder)
        return Response(serializer.data, status.HTTP_200_OK)
    elif request.method == 'PUT':
        # UPDATING A WORKORDER BY THE PK
        serializer = WorkorderSerializers(workorder, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status.HTTP_202_ACCEPTED)

@api_view(['PATCH'])
@permission_classes([AllowAny])
def update_status(request,pk):
    if request.method == 'PATCH':
        workorder = get_object_or_404(Workorders, pk=pk)
        serializer = WorkorderSerializers(workorder, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status = status.HTTP_202_ACCEPTED)