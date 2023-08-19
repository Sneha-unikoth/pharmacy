from django.urls import path
from myapp import views
urlpatterns = [
    path("Register",views.RegisterSerializerAPIView.as_view(),name="Register"),
    path("Login",views.LoginAPIView.as_view(),name="Login"),
    path("pharmacyreg",views.pharmacyregSerializerAPIView.as_view(),name="pharmacyreg"),
    path("medicine",views.medicineSerializersAPIView.as_view(),name="medicine"),
    path("symptoms",views.symptomsSerializersAPIView.as_view(),name="symptoms"),
    path("prescription",views.prescriptionSerializersAPIView.as_view(),name="prescription"),
    path("notification",views.notificationSerializersAPIView.as_view(),name="notification"),
    path("complaints",views.complaintsSerializersAPIView.as_view(),name="complaints"),



]