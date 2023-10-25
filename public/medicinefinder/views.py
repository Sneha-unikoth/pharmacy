from django.shortcuts import render,redirect
from .import models
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib import messages
from urllib.request import Request 
from myapp.models import pharmacyreg

# Create your views here.
def index(request):
    return render(request,'Login.html')
   
def admin_dashboard(request):
    return render(request,'Dashboard.html')

def admin_viewpharmacy(request):
    return render(request,'Viewpharmacy.html')  

def admin_approvepharmacy(request):
    return render(request,'approvedpharmacy.html')     

def admin_login(request):
    if request.method=='POST':
        username=request.POST.get('username')
        password=request.POST.get('password')
        user=authenticate(username=username,password=password)
                    
        if user is not None:
            auth_login(request,user)
            return render(request,'Dashboard.html')
            print(login)
        else:
            messages.info(request,'Invalid credentials')
            return redirect('admin_login')

    else:
        return render(request,'Login.html') 

def admin_approvepharmacy(request):
    data=pharmacyreg.objects.all() 
    print(data)
    return render(request,'Approvedpharmacy.html',{'data':data})    

def admin_viewpharmacy(request):
    data=pharmacyreg.objects.all() 
    print(data)
    return render(request,'Viewpharmacy.html',{'data':data})      

def admin_approve_pharmacy(request,id):
    data=pharmacyreg.objects.get(id=id) 
    data.pharmacystatus=1
    data.save()
    return redirect('admin_approvepharmacy')    



def admin_delete_pharmacy(request,id):
    data=pharmacyreg.objects.get(id=id) 
    print(data)
    data.delete()
    return redirect('admin_approvepharmacy')   


