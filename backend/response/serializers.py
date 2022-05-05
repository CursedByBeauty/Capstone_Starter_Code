from .models import Response
from rest_framework import serializers 

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = ['workorder','worker','date','comments','workorder_id']
        depth = 1
        workorder_id = serializers.IntegerField(write_only = True)

