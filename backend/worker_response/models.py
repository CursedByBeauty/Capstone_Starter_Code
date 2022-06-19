from django.db import models
from workorders.models import Workorders
from authentication.models import User

class WorkerResponse(models.Model):

    workorder = models.ForeignKey(Workorders,on_delete=models.CASCADE)
    management = models.ForeignKey(User,related_name = "Management", on_delete=models.CASCADE)
    worker = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    comments = models.CharField(max_length=255)










