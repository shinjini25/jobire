
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Avg, Min, Max, Count

from .serializers import JobSerializer
from .models import Job

from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET'])
def getAllJobs(request):

    jobs = Job.objects.all()

    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)