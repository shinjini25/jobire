# Generated by Django 4.0.6 on 2022-07-13 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0008_alter_job_skills'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='experience',
            field=models.CharField(choices=[('No Experience', 'No Experience'), ('1 Year', 'One Year'), ('2 Years', 'Two Year'), ('3 Years and above', 'Three Year Plus')], default='No Experience', max_length=20),
        ),
        migrations.AlterField(
            model_name='job',
            name='mode',
            field=models.CharField(choices=[('Work from Home/Remote', 'Wfh'), ('Onsite', 'On Site'), ('Hybrid Mode', 'Hybrid Mode')], default='Hybrid Mode', max_length=30, null=True),
        ),
    ]