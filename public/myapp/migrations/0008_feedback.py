# Generated by Django 4.2.1 on 2023-08-31 05:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0007_rename_pharmacyreg_id_notification_pharmacy_id"),
    ]

    operations = [
        migrations.CreateModel(
            name="feedback",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=30)),
                ("date", models.DateField(max_length=20)),
                ("feedback", models.CharField(max_length=50)),
                ("feedbackstatus", models.CharField(max_length=30)),
                (
                    "patient_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="myapp.patientreg",
                    ),
                ),
            ],
        ),
    ]
