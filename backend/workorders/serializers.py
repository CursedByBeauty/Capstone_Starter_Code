from rest_framework import serializers
from .models import Workorders

class WorkorderSerializers(serializers.ModelSerializer):
    class Meta:
        model = Workorders
        fields = ['id','resident','date','unit','subject','comments','entry','priority','status']