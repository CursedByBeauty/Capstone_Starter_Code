from datetime import date
from sqlite3 import Date
from django.db import models
from backend.workorders.models import Workorders
from authentication.models import worker

# Create your models here.


class Response(models.Models):

    workorder = models.ForeignKey(Workorders)
    worker = models.CharField()
    date = models.DateField()
    comments = models.CharField(max_length=255)
