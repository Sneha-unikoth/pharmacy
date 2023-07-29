from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from myapp.models import Login,patientreg,pharmacyreg
from.serializers import LoginSerializer,RegisterSerializer,pharmacyregSerializer

class RegisterSerializerAPIView(GenericAPIView):
    serializer_class = RegisterSerializer
 
    serializer_class_login = LoginSerializer


    def post(self,request):


        Login_id=''
        name=request.data.get('name')
        address=request.data.get('address')
        email=request.data.get('email')
        phone=request.data.get('phone')
        age=request.data.get('age')
        place=request.data.get('place')
        username=request.data.get('username')
        password=request.data.get('password')
        role='user'
        patientstatus='0'


        if(Login.objects.filter(username=username)):
            return Response({'message':'Duplicate User Found'},status = status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'username':username,'password':password,'role':role})
        if serializer_login.is_valid():
            login=serializer_login.save()
            Login_id=login.id
            print(Login_id)
        serializer=self.serializer_class(data={'Login_id':Login_id,'username':username,'name':name,'email':email,'address':address,'phone':phone,'place':place,'age':age,'password':password,'role':role,'patientstatus':patientstatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'User registered Successfully','Success':True},status=status.HTTP_201_CREATED)
        else:
            return Response({'data':serializer.errors,'message':"False"},status=status.HTTP_400_BAD_REQUEST) 



class LoginAPIView(GenericAPIView):
    
    serializer_class = LoginSerializer
    
    def post(self,request):
        user_id=""
        l_status=""
        name=""
        username=request.data.get('username')
        password=request.data.get('password')
        logreg=Login.objects.filter(username=username,password=password)
        if(logreg.count()>0):
            read_serlizer=LoginSerializer(logreg,many=True)
            for i in read_serlizer.data:
                id=i['id']
                print(id)
                role=i['role']
                regdata=patientreg.objects.all().filter(Login_id=id).values()
                print(patientreg)
                for i in regdata:
                    user_id=i['id']
                    l_status=i['patientstatus']
                    name=i['name']
                    print(user_id)
                regdata=pharmacyreg.objects.all().filter(Login_id=id).values()
                print(pharmacyreg)
                for i in regdata:
                    user_id=i['id']
                    l_status=i['pharmacystatus']
                    name=i['name']
                    print(user_id)    
                
            return Response({'data':{'login_id':id,'username':username,'password':password,'role':role,'user_id':user_id,'l_status':l_status,'name':name},'success':True,'message':'logged in successfully'},status=status.HTTP_201_CREATED)
        else:
            return Response({'data':'username or password is invalied','sucess':False,},status=status.HTTP_400_BAD_REQUEST)

class pharmacyregSerializerAPIView(GenericAPIView):
    serializer_class = pharmacyregSerializer
 
    serializer_class_login = LoginSerializer


    def post(self,request):


        Login_id=''
        name=request.data.get('name')
        address=request.data.get('address')
        email=request.data.get('email')
        phone=request.data.get('phone')
        place=request.data.get('place')
        username=request.data.get('username')
        password=request.data.get('password')
        role='pharmacy'
        pharmacystatus='0'


        if(Login.objects.filter(username=username)):
            return Response({'message':'Duplicate User Found'},status = status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'username':username,'password':password,'role':role})
        if serializer_login.is_valid():
            login=serializer_login.save()
            Login_id=login.id
            print(Login_id)
        serializer=self.serializer_class(data={'Login_id':Login_id,'username':username,'name':name,'email':email,'address':address,'phone':phone,'place':place,'password':password,'role':role,'pharmacystatus':pharmacystatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'pharmacy registered Successfully','Success':True},status=status.HTTP_201_CREATED)
        else:
            return Response({'data':serializer.errors,'message':"False"},status=status.HTTP_400_BAD_REQUEST)
     
