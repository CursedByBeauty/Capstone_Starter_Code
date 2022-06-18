from .models import WorkerResponse
from rest_framework import serializers

class WorkerResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkerResponse
        fields = ['id','worker', 'worker_id','date','comments','workorder','workorder_id']
        depth = 1
    worker_id = serializers.IntegerField(write_only = True)
    workorder_id = serializers.IntegerField(write_only = True)