from django.db import models
from workorders.models import Workorders

class WorkerResponse(models.Model):
    workorder = models.ForeignKey(Workorders,on_delete=models.CASCADE)
    worker = models.CharField(max_length=30)
    date = models.DateField()
    comments = models.CharField(max_length=255)
