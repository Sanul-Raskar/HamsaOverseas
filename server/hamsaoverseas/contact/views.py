from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail

# Create your views here.

@csrf_exempt 
def sendEnquiryDetails(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        mobile = request.POST.get('mobile')
        country = request.POST.get('country')
        address = request.POST.get('address')
        website = request.POST.get('website')
        product = request.POST.get('product')
        message = request.POST.get('message')

        email_subject="Hamsa Overseas Enquiry from {}".format(name)
        email_from="test@gmail.com"
        email_to="test@gmail.com"
        email_message="Name: {}\n\nEmail: {}\n\nMobile: {}\n\nCountry: {}\n\nAddress: {}\n\nWebsite: {}\n\nProduct: {}\n\nMessage: {}\n\n".format(name,email,mobile,country,address,website,product,message)

        print(email_message)
        #send_mail(email_subject,email_message,email_from,[email_to],fail_silently=False,)

        #if mail sent successfully
        return JsonResponse({"statusMessage": "Message sent successfully to Hamsa Overseas"}, status=200)

        #if mail not sent
        #return JsonResponse({"statusMessage": "Error in sending message to Hamsa Overseas. Please try again later"}, status=500)

    else:
        return HttpResponse(status=404)