from django.shortcuts import render
from rest_framework.response import Response
from django.conf import settings
from django.db.models import Sum
from rest_framework import status
import datetime  
from rest_framework.generics import GenericAPIView
from myapp.models import Login,patientreg,pharmacyreg,medicine,symptoms,prescription,notification,complaints,feedback,cart,payment
from.serializers import LoginSerializer,RegisterSerializer,pharmacyregSerializer,medicineSerializer,symptomsSerializer,prescriptionSerializer,notificationSerializer,complaintsSerializer,feedbackSerializer,cartSerializer,paymentSerializer

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


class medicineSerializersAPIView(GenericAPIView):
    serializer_class = medicineSerializer
   

    def post(self,request):

      
        name=request.data.get('name')
        price=request.data.get('price')
        description=request.data.get('description')
        image=request.data.get('image')
       
        pharmacy_id=request.data.get('pharmacy_id')
        # role='user'
        medicinestatus='0'
        serializer = self.serializer_class(data={'name':name,'price':price,'description':description,'image':image,'pharmacy_id':pharmacy_id,'medicinestatus':medicinestatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'add product successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST) 

class symptomsSerializersAPIView(GenericAPIView):
    serializer_class = symptomsSerializer
   

    def post(self,request):

            
        name=request.data.get('name')
        age=request.data.get('age')
        symptoms=request.data.get('symptoms')
        gender=request.data.get('gender')
       
        patient_id=request.data.get('patient_id')
   
        symptomstatus='0'
        serializer = self.serializer_class(data={'name':name,'age':age,'gender':gender,'symptoms':symptoms,'patient_id':patient_id,'symptomstatus':symptomstatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'add product successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST) 
     
class prescriptionSerializersAPIView(GenericAPIView):
    serializer_class = prescriptionSerializer
   

    def post(self,request):

      
        name=request.data.get('name')
        age=request.data.get('age')
        prescription=request.data.get('prescription')
        sex=request.data.get('sex')
       
        pharmacy_id=request.data.get('pharmacy_id')
        # role='user'
        prescriptionstatus='0'
        serializer = self.serializer_class(data={'name':name,'age':age,'prescription':prescription,'sex':sex,'pharmacy_id':pharmacy_id,'status':prescriptionstatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'add product successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST)     


class notificationSerializersAPIView(GenericAPIView):
    serializer_class = notificationSerializer
   

    def post(self,request):

      
        notification=request.data.get('notification')
        date=request.data.get('date')
        
        pharmacy_id=request.data.get('pharmacy_id')
        notificationstatus='0'
        serializer = self.serializer_class(data={'notification':notification,'date':date,'pharmacy_id':pharmacy_id,'status':notificationstatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'add symptoms successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST)     


class complaintsSerializersAPIView(GenericAPIView):
    serializer_class = complaintsSerializer
   

    def post(self,request):

        name=request.data.get('name')
        complaints=request.data.get('complaints')
        date=request.data.get('date')
        replay=request.data.get('replay')
        pharmacyreg_id=request.data.get('pharmacyreg_id')
        complaintsstatus='0'
        serializer = self.serializer_class(data={'name':name,'notification':notification,'date':date,'replay':replay,'pharmacy_id':pharmacy_id,'status':complaintsstatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'add notification successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST)   

class Get_symptomsAPIView(GenericAPIView):
    serializer_class = symptomsSerializer
    def get(self,request):
        queryset = symptoms.objects.all()
        if(queryset.count()>0):
            serializer =symptomsSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'shop all data','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST)

class Get_notificationAPIView(GenericAPIView):
    serializer_class=notificationSerializer
    def get(self,request):
        queryset=notification.objects.all()
        if(queryset.count()>0):
            serializer=notificationSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all notification','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No data available','success':false},status=status.HTTP_400_BAD_REQUEST)  
class Get_medicineAPIView(GenericAPIView):
    serializer_class=medicineSerializer
    def get(self,request):
        queryset=medicine.objects.all()
        if(queryset.count()>0):
            serializer=medicineSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'view succesfully','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No available data','success':False},status=status.HTTP_400_BAD_REQUEST) 
class Get_feedbackAPIView(GenericAPIView):
    serializer_class=feedbackSerializer
    def get(self,request):
        queryset=feedback.objects.all()
        if(queryset.count()>0):
            serializer=feedbackSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'view successfully','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No avalable data','success':False},status=status.HTTP_400_BAD_REQUEST)
class feedbackSerializerAPIView(GenericAPIView):
    serializer_class=feedbackSerializer 
    def post(self,request):
       
        
        date = datetime.date.today()
        # date = date.today(date)  
        feedback=request.data.get('feedback')
        patient_id=request.data.get('patient_id')
        feedbackstatus='0'
        data=patientreg.objects.filter(id=patient_id).values()
        for i in data:
            name=i['name']
        serializer=self.serializer_class(data={'name':name,'date':date,'feedback':feedback,'patient_id': patient_id,'feedbackstatus':feedbackstatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'add feedback successfully','success''success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST)   
class cartSerializerAPIView(GenericAPIView):
    serializer_class=cartSerializer
    def post(self,request):
        date = datetime.date.today()
        cartstatus='0'
        medicinename=""
        image=""
        price=""
        quantity=""
        usr=request.data.get('patient_id')
        print("-----",usr)
        prdt=request.data.get('medicine_id')
        print(prdt)
        quty="1"
        quantity=int(quty)
        cartstatus="0"
        carts=cart.objects.filter(patient_id=usr,medicine_id=prdt)
        print("========",cart)
        if carts.exists():
            return Response({'message':'item is already in cart','success':False},status=status.HTTP_400_BAD_REQUEST)
        else:
            data=medicine.objects.all().filter(id=prdt).values()
            for i in data:
                print(i)
                price=i['price']
                m_name=i['name']
                price=int(price)
                print(price)
                price=price*quantity
                print(price)
                tp=str(price)
            producto=medicine.objects.get(id=prdt)
            image=producto.image  
            print(image)  

        data=patientreg.objects.filter(id=usr).values()
        for i in data:
            name=i['name']
        serializer=self.serializer_class(data={'name':name,'date':date,'quantity':quantity,'medicinename':m_name,'price':tp,'image':image,'patient_id':usr,'medicine_id':prdt,'cartstatus':cartstatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'add cart successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"fAILED",'success':False},status=status.HTTP_400_BAD_REQUEST)

class SingleCartAPIView(GenericAPIView):
    def get(self,request,id):
        u_id=""
        qset=patientreg.objects.all().filter(pk=id).values()
        for i in qset:
            u_id=i['id']
        data=cart.objects.filter(patient_id=u_id).values()
        serialized_data=list(data)
        print(serialized_data)
        for obj in serialized_data:
            obj['image']=settings.MEDIA_URL+str(obj['image']) 
        return Response({'data':data,'message':'single product data','success':True},status=status.HTTP_200_OK)

class itemsearchAPIView(GenericAPIView):
    def post(self,request):
        search=request.data.get('search')
        data=medicine.objects.filter(name=search).values()
        return Response({'data':data,'message':'Search data','success':True},status=status.HTTP_200_OK)


class CartIncrementQuantityAPIView(GenericAPIView):
    def put(self, request, id):
        cart_item = cart.objects.get(pk=id)
        qnty=cart_item.quantity
        qty=int(qnty)
        print(qnty)
        cart_item.quantity=qty+1
        q=cart_item.quantity
        qn=int(q)
        print(q)
        pr=cart_item.medicine_id.price
        price=int(pr)
        print(pr)
      
        tp=price*qn
        print(tp)
        cart_item.price=tp
        cart_item.save()
        serialized_data = cartSerializer(cart_item,context={'request':request}).data
        # serialized_data['images']=str(serialized_data['images']).split('http://localhost:8000')[1]
        base_url=request.build_absolute_uri('/')[:-1]
        serialized_data['image']=str(serialized_data['image']).replace(base_url,'')
        return Response({'data' : serialized_data, 'message':'cart item quantity updated','success':True},status=status.HTTP_200_OK)  




class CartDecrementQuantityAPIView(GenericAPIView):
    def put(self, request, id):
        cart_item = cart.objects.get(pk=id)


        qny=cart_item.quantity
        qant=int(qny)
        
        if qant > 1:
            qnty=cart_item.quantity
            qty=int(qnty)
            cart_item.quantity=qty-1

            q=cart_item.quantity
            qn=int(q)

            pr=cart_item.medicine_id.price
            price=int(pr)


            tp=price*qn
            cart_item.price=tp


            cart_item.save()
            serialized_data = cartSerializer(cart_item,context={'request':request}).data
            base_url=request.build_absolute_uri('/')[:-1]
            serialized_data['image']=str(serialized_data['image']).replace(base_url,'')

            return Response({'data' : serialized_data, 'message':'cart item quantity updated','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'message':'Quantity cannot be less than 1','success':False},status=status.HTTP_400_BAD_REQUEST)

class DeleteCartAPIView(GenericAPIView):
    def delete(self,request,id):
        delmember=cart.objects.get(pk=id)
        delmember.delete()
        return Response({'message':'cart deleted','success':True},status=status.HTTP_200_OK)


# class Get_all_priceAPIView(GenericAPIView):
#     serializer_class = cartSerializer
#     def get(self,request):
#         queryset = cart.objects.all()
#         if(queryset.count()>0):
#             serializer =cartSerializer(queryset,many=True)
#             return Response({'data':serializer.data,'message':'payment all data','success':True},status=status.HTTP_200_OK)
#         else:
#             return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST)

class AllPriceAPIView(GenericAPIView):

    def get(self,request,id):
        carts=cart.objects.filter(patient_id=id,cartstatus="1")
        print(carts)
        tot=carts.aggregate(total=Sum('price'))['total']
        Total_prices=str(tot)
        print(tot)
        price_status="0"
        return Response({'data':{'price':Total_prices},'message':'get order price successfully','success':True},status=status.HTTP_201_CREATED)


class UserOrderPaymentAPIView(GenericAPIView):   
    serializer_class=paymentSerializer

    def post(self,request):
        
        patient_id=request.data.get('patient_id')
        total_amount=request.data.get('total_amount')
        print(patient_id)
           
        paymentstatus="1"


        
        serializer= self.serializer_class(data= {'patient_id':patient_id,'total_amount':total_amount,'paymentstatus':paymentstatus})
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'payment successfull','success':True}, status = status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Failed','success':False},status=status.HTTP_400_BAD_REQUEST)

class Get_paymentAPIView(GenericAPIView):
    serializer_class = paymentSerializer
    def get(self,request):
        queryset = payment.objects.all()
        if(queryset.count()>0):
            serializer =paymentSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'payment all data','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST)