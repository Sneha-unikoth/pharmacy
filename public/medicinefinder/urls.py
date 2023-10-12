from django.urls import path
from .import views

urlpatterns = [
    path("",views.index,name="index"),
    path("login",views.admin_login,name="admin_login"), 
    path("dashboard",views.admin_dashboard,name="admin_dashboard"),
    path("approvepharmacy",views.admin_approvepharmacy,name="admin_approvepharmacy"),
    path("viewpharmacy",views.admin_viewpharmacy,name="admin_viewpharmacy"),
    path("admin_approve_pharmacy/<int:id>",views.admin_approve_pharmacy,name="admin_approve_pharmacy"),   
   
]