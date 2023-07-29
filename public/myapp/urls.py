from django.urls import path
from myapp import views
urlpatterns = [
    path("Register",views.RegisterSerializerAPIView.as_view(),name="Register"),
    path("Login",views.LoginAPIView.as_view(),name="Login"),
    path("pharmacyreg",views.pharmacyregSerializerAPIView.as_view(),name="pharmacyreg"),
]