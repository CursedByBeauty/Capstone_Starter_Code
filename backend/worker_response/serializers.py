from .models import WorkerResponse
from rest_framework import serializers

class WorkerResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkerResponse
        fields = ['id','worker','date','comments','workorder','status','workorder_id']
        depth = 1
    workorder_id = serializers.IntegerField(write_only = True)