from .models import Workorders
from .serializers import WorkorderSerializers
from modulefinder import IMPORT_NAME
from rest_framework import status
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_workorders(request):
    if request.method == 'GET':
        workorders = Workorders.objects.all().order_by('priority')
        serializer = WorkorderSerializers(workorders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


