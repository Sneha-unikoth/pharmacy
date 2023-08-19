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


class medicine(models.Model):
    name=models.CharField(max_length=30)
    description=models.CharField(max_length=80)
    price=models.CharField(max_length=30)
    image=models.ImageField(upload_to='images')
    medicinestatus=models.CharField(max_length=10) 
    pharmacy_id=models.ForeignKey( pharmacyreg,on_delete=models.CASCADE)
  
    def __str__(self):
        return self.description     


class symptoms(models.Model):
    name=models.CharField(max_length=30)
    age=models.CharField(max_length=80)
    symptoms=models.CharField(max_length=30)
    sex=models.ImageField(max_length=30)
    symptomstatus=models.CharField(max_length=10) 
    patient_id=models.ForeignKey( patientreg,on_delete=models.CASCADE)
  
    def __str__(self):
        return self.sex   

class prescription(models.Model):
    name=models.CharField(max_length=30)
    age=models.CharField(max_length=80)
    prescription=models.ImageField(upload_to='images')
    sex=models.ImageField(max_length=30)
    prescriptionstatus=models.CharField(max_length=10) 
    patient_id=models.ForeignKey( patientreg,on_delete=models.CASCADE)
  
    def __str__(self):
        return self.age    

class notification(models.Model):
    notification=models.CharField(max_length=30)
    date=models.DateField(max_length=20)
    pharmacyreg_id=models.ForeignKey(pharmacyreg,on_delete=models.CASCADE)
    status=models.CharField(max_length=20)
    def __str__(self):
        return self.notification  

class complaints(models.Model):
    name=models.CharField(max_length=30)
    complaints=models.CharField(max_length=500)
    date=models.DateField(max_length=20)
    replay=models.CharField(max_length=500,default='No replay')
    patient_id=models.ForeignKey(patientreg,on_delete=models.CASCADE)
    complaintstatus=models.CharField(max_length=20)
    def __str__(self):
        return self.complaints                   

  


# Create your models here.
