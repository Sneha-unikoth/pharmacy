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
    path("get_all_symptoms",views.Get_symptomsAPIView.as_view(),name="get_all_symptoms"), 
    path("get_all_notification",views.Get_notificationAPIView.as_view(),name="get_all_notification"),
    path("feedback",views.feedbackSerializerAPIView.as_view(),name="feedback"),
    path("get_all_feedback",views.Get_feedbackAPIView.as_view(),name="get_all_feedback"),
    path("medicine",views.medicineSerializersAPIView.as_view(),name="medicine"),
    path("get_all_medicine",views.Get_medicineAPIView.as_view(),name="get_all_medicine"),
    path("cart",views.cartSerializerAPIView.as_view(),name="cart"),
    path("get_single_cart/<int:id>",views.SingleCartAPIView.as_view(),name="get_single_cart"), 
    path("search",views.itemsearchAPIView.as_view(),name="search"),
    path("CartIncrement/<int:id>",views.CartIncrementQuantityAPIView.as_view(),name="CartIncrement"), 
    path("CartDecrement/<int:id>",views.CartDecrementQuantityAPIView.as_view(),name="CartDecrement"), 
    path("Cartdelete/<int:id>",views.DeleteCartAPIView.as_view(),name="Cartdelete"), 
    path("all_price/<int:id>",views.AllPriceAPIView.as_view(),name="all_price"),
    path("get_all_payment",views.Get_paymentAPIView.as_view(),name="get_all_payment"), 
    path("payment",views.UserOrderPaymentAPIView.as_view(),name="payment"),

]