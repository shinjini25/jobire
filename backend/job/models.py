from datetime import *
from django.db import models
from django.contrib.auth.models import User

import geocoder
import os

from django.contrib.gis.db import models as gismodels
from django.contrib.gis.geos import Point

from django.core.validators import MinValueValidator, MaxValueValidator
from multiselectfield import MultiSelectField

# Create your models here.

class JobType(models.TextChoices):
    Permanent = 'Permanent'
    Temporary = 'Temporary'
    Internship = 'Internship'

class Education(models.TextChoices):
    Bachelors = 'Bachelors'
    Masters = 'Masters'
    Phd = 'Phd'

class Industry(models.TextChoices):
    Business = 'Sales/Business'
    IT = 'Information Technology'
    Software = 'Software'
    DataScience = "Data Science"
    Wordpress = "Wordpress Developer"
    Banking = 'Banking'
    Education = 'Education/Training'
    Telecommunication = 'Telecommunication'
    Marketing = 'Marketing'
    HR = 'HR'
    Others = 'Others'

class Experience(models.TextChoices):
    NO_EXPERIENCE = 'No Experience'
    ONE_YEAR = '1 Years'
    TWO_YEAR = '2 Years'
    THREE_YEAR_PLUS = '3 Years & above'

class Availability(models.TextChoices):
    Immediately = 'Immediately'
    IN_A_MONTH = 'In a Month'


class Mode(models.TextChoices):
    WFH= 'Work from Home/Remote'
    ON_SITE = 'On-site'
    HYBRID_MODE = 'Hybrid Mode'
    
class Skills(models.TextChoices):
    WEB_DEV= 'Web Development'
    PHP = "PHP"
    SQL = "SQL"
    JS = "JavaScript"
    AN = "Android Development"
    IOS = "IOS Development"
    JV ="Java"
    C_PL = "C/C++"
    PY= "Python"
    CC = "Cloud"
    SW = "Swift"
    DS = "Database Management"
    NS = "Network Security/Management"
    DT= "Dart"
    IM ="Image Processing"
    DL ="Deep Learning"
    AI = "Artificial Intelligence"
    BA ="Business Analytics"
    BLOCK = "Blockchain"
    CY ="Cyber Security"
    PR ="Project Management"   
    UI_UX= "UI/UX"

SKILLS_CHOICES = [(1, 'Web Development'),(2, 'PHP'), (3, 'SQL'), (4, 'JavaScript'), (5, 'Android Development'),
                  (6,"IOS Development" ), (7,"Java" ), (8,  "C/C++"), (9,"Python"), (10, "Cloud"),  (11, "Swift"),
                  (12, "Database Management"), (13, "Network Security/Management"), (14, "Dart"),(15, "Image Processing"),
                  (16, "Deep Learning"),(17, "Artificial Intelligence"),(18, "Business Analytics"),(19, "Blockchain"),
                  (20, "Cyber Security"),(21, "Project Management"),(22, "UI/UX"),]  
    
def return_date_time():
    now = datetime.now()
    return now + timedelta(days=10)

class Job(models.Model):
    title = models.CharField(max_length=200, null=True)
    description = models.TextField(null=True)
    email = models.EmailField(null=True)
    address = models.CharField(max_length=100, null=True)
    jobType = models.CharField(
        max_length=10,
        choices=JobType.choices,
        default=JobType.Permanent
    )
    education = models.CharField(
        max_length=10,
        choices=Education.choices,
        default=Education.Bachelors
    )
    industry = models.CharField(
        max_length=35,
        choices=Industry.choices,
        default=Industry.IT
    )
    experience = models.CharField(
        max_length=20,
        choices=Experience.choices,
        default=Experience.NO_EXPERIENCE
    )
    # skills = models.CharField(
    #     max_length=60,
    #     choices=Skills.choices,
    #     default=Skills.HYBRID_MODE,
    #     null= True
    # )
    availablity = models.CharField(
        max_length=20,
        choices=Availability.choices,
        default=Availability.Immediately,
        null=True
    )
    mode = models.CharField(
        max_length=30,
        choices=Mode.choices,
        default=Mode.HYBRID_MODE,
        null= True
    )
    skills = MultiSelectField(choices=SKILLS_CHOICES,max_choices=20,max_length=50, null=True)
    salary = models.IntegerField(default=1, validators=[MinValueValidator(0), MaxValueValidator(1000000)])
    positions = models.IntegerField(default=1)
    duration = models.CharField(max_length=100, null=True)
    company = models.CharField(max_length=100, default ="ABC Company")
    website = models.CharField(max_length=100, null=True)
    point = gismodels.PointField(default=Point(0.0, 0.0))
    lastDate = models.DateTimeField(default=return_date_time)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        g = geocoder.mapquest(self.address, key=os.environ.get('GEOCODER_API'))

        print(g)

        lng = g.lng
        lat = g.lat

        self.point = Point(lng, lat)
        super(Job, self).save(*args, **kwargs)

class CandidatesApplied(models.Model):
    job = models.ForeignKey(Job, related_name = "candidatesapplied" ,on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    resume = models.CharField(max_length=200)
    appliedAt = models.DateTimeField(auto_now_add=True)