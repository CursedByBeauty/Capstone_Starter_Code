from rest_framework import serializers
from .models import Workorders

class WorkorderSerializers(serializers.ModelSerializer):
    class Meta:
        model = Workorders
        fields = ['id','resident', 'resident_id', 'date','unit','subject','comments','entry','priority','status']
        depth=1
    resident_id = serializers.IntegerField(write_only=True)