# Generated by Django 4.2.1 on 2023-09-11 07:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0009_cart"),
    ]

    operations = [
        migrations.RenameField(
            model_name="cart",
            old_name="mediciename",
            new_name="medicinename",
        ),
        migrations.AddField(
            model_name="cart",
            name="quantity",
            field=models.CharField(default=1, max_length=30),
            preserve_default=False,
        ),
    ]