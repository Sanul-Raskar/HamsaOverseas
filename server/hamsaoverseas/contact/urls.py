from django.urls import path

from . import views

urlpatterns = [
    path('enquiry/', views.sendEnquiryDetails, name='sendEnquiryDetails'),
]