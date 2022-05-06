from django.db import models
from workorders.models import Workorders

class WorkerResponse(models.Model):

    STATUS_CHOICES = [
        ('I', 'Incomplete'),
        ('H', 'On Hold'),
        ('C', 'Complete'),
    ]
    workorder = models.ForeignKey(Workorders,on_delete=models.CASCADE)
    worker = models.CharField(max_length=30)
    date = models.DateField()
    comments = models.CharField(max_length=255)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default= 'I')











