# Generated by Django 4.0.6 on 2022-07-11 16:47

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0004_alter_candidatesapplied_job'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='availablity',
            field=models.CharField(choices=[('Immediately', 'Immediately'), ('In a Month', 'In A Month')], default='Immediately', max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='job',
            name='duration',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='job',
            name='mode',
            field=models.CharField(choices=[('Work from Home/Remote', 'Wfh'), ('On-site', 'On Site'), ('Hybrid Mode', 'Hybrid Mode')], default='Hybrid Mode', max_length=25, null=True),
        ),
        migrations.AddField(
            model_name='job',
            name='website',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='job',
            name='company',
            field=models.CharField(default='ABC Company', max_length=100),
        ),
        migrations.AlterField(
            model_name='job',
            name='experience',
            field=models.CharField(choices=[('No Experience', 'No Experience'), ('1 Years', 'One Year'), ('2 Years', 'Two Year'), ('3 Years & above', 'Three Year Plus')], default='No Experience', max_length=20),
        ),
        migrations.AlterField(
            model_name='job',
            name='industry',
            field=models.CharField(choices=[('Sales/Business', 'Business'), ('Information Technology', 'It'), ('Software', 'Software'), ('Data Science', 'Datascience'), ('Wordpress Developer', 'Wordpress'), ('Banking', 'Banking'), ('Education/Training', 'Education'), ('Telecommunication', 'Telecommunication'), ('Marketing', 'Marketing'), ('HR', 'Hr'), ('Others', 'Others')], default='Information Technology', max_length=35),
        ),
        migrations.AlterField(
            model_name='job',
            name='salary',
            field=models.IntegerField(default=1, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(1000000)]),
        ),
    ]
