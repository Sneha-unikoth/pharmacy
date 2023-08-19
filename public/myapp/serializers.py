from rest_framework import serializers
from myapp.models import Login,patientreg,pharmacyreg,medicine,symptoms,prescription,complaints,notification

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model=Login
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=patientreg
        fields = '__all__'  
        def create(self,validated_data):
            return patientreg.objects.create(**validated_data)      



class pharmacyregSerializer(serializers.ModelSerializer):
    class Meta:
        model=pharmacyreg
        fields = '__all__'  
        def create(self,validated_data):
            return pharmacyreg.objects.create(**validated_data)

class medicineSerializer(serializers.ModelSerializer):
    class Meta:
        model=medicine
        fields = '__all__'  
        def create(self,validated_data):
            return medicine.objects.create(**validated_data)

class symptomsSerializer(serializers.ModelSerializer):
    class Meta:
        model=symptoms
        fields = '__all__'  
        def create(self,validated_data):
            return symptoms.objects.create(**validated_data)


class prescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model=prescription
        fields = '__all__'  
        def create(self,validated_data):
            return prescription.objects.create(**validated_data)  

class complaintsSerializer(serializers.ModelSerializer):
    class Meta:
        model=complaints
        fields = '__all__'
        def create(self,validated_data):
            return complaints.objects.create(**validated_data)            


class notificationSerializer(serializers.ModelSerializer):
    class Meta:
        model=notification
        fields = '__all__'
        def create(self,validated_data):
            return notification.objects.create(**validated_data)
