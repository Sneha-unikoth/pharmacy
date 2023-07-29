# Generated by Django 4.2.1 on 2023-07-27 09:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0002_register_userstatus"),
    ]

    operations = [
        migrations.CreateModel(
            name="patientreg",
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
                ("address", models.CharField(max_length=80)),
                ("phone", models.CharField(max_length=30)),
                ("place", models.CharField(max_length=30)),
                ("age", models.CharField(max_length=30)),
                ("email", models.EmailField(max_length=30)),
                ("username", models.CharField(max_length=30)),
                ("password", models.CharField(max_length=30)),
                ("role", models.CharField(max_length=20)),
                ("patientstatus", models.CharField(max_length=10)),
                (
                    "Login_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="myapp.login"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="pharmacyreg",
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
                ("address", models.CharField(max_length=80)),
                ("phone", models.CharField(max_length=30)),
                ("place", models.CharField(max_length=30)),
                ("email", models.EmailField(max_length=30)),
                ("username", models.CharField(max_length=30)),
                ("password", models.CharField(max_length=30)),
                ("role", models.CharField(max_length=20)),
                ("pharmacystatus", models.CharField(max_length=10)),
                (
                    "Login_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="myapp.login"
                    ),
                ),
            ],
        ),
        migrations.DeleteModel(
            name="Register",
        ),
    ]