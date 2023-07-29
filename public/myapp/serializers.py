from rest_framework import serializers
from myapp.models import Login,patientreg,pharmacyreg

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