from django.contrib import admin
from.models import Login,patientreg,pharmacyreg,medicine,symptoms,prescription,complaints,notification
# Register your models here.
admin.site.register(Login)
admin.site.register(patientreg)
admin.site.register(pharmacyreg)
admin.site.register(medicine)
admin.site.register(symptoms)
admin.site.register(prescription)
admin.site.register(complaints)
admin.site.register(notification)
