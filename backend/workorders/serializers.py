from rest_framework import serializers
from .models import Workorders

class WorkordersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Workorders
        fields = ['resident','date','unit','subject','comments','entry','priority','status']