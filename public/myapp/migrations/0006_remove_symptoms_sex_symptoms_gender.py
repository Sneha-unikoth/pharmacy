# Generated by Django 4.2.1 on 2023-08-22 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0005_symptoms_prescription_notification_complaints"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="symptoms",
            name="sex",
        ),
        migrations.AddField(
            model_name="symptoms",
            name="gender",
            field=models.CharField(default=1, max_length=30),
            preserve_default=False,
        ),
    ]
