from django.db import models
class Login(models.Model):
    username=models.CharField(max_length=30,unique=True)
    password=models.CharField(max_length=30,unique=True)
    role=models.CharField(max_length=20)
    def __str__(self):
        return self.username

class patientreg(models.Model):
    Login_id=models.ForeignKey(Login,on_delete=models.CASCADE)
    name=models.CharField(max_length=30)
    address=models.CharField(max_length=80)
    phone=models.CharField(max_length=30)
    place=models.CharField(max_length=30)
    age=models.CharField(max_length=30)
    email=models.EmailField(max_length=30)
    username=models.CharField(max_length=30)
    password=models.CharField(max_length=30)
    role=models.CharField(max_length=20)
    patientstatus=models.CharField(max_length=10)
    def __str__(self):
        return self.name

class pharmacyreg(models.Model):
    Login_id=models.ForeignKey(Login,on_delete=models.CASCADE)
    name=models.CharField(max_length=30)
    address=models.CharField(max_length=80)
    phone=models.CharField(max_length=30)
    place=models.CharField(max_length=30)
    email=models.EmailField(max_length=30)
    username=models.CharField(max_length=30)
    password=models.CharField(max_length=30)
    role=models.CharField(max_length=20)
    pharmacystatus=models.CharField(max_length=10) 
    def __str__(self):
        return self.place   

  


# Create your models here.
