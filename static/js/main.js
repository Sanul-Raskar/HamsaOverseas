$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".topButton").addClass("buttonDisplay");
    } else {
      $(".topButton").removeClass("buttonDisplay");
    }

    /* if ($(this).scrollTop() > 250) {
        $(".navbar").addClass("solid");
        $(".navbar").css("background-color: #000;");
      } else {
        $(".navbar").removeClass("solid");
      }
       */
  });
});

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

let enquiryform = document.getElementById("enquiryForm");
enquiryform.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = {};
  data.name = enquiryform["name"].value;
  data.email = enquiryform["email"].value;
  data.mobile = enquiryform["mobile"].value;
  data.country = enquiryform["country"].value;
  data.address = enquiryform["address"].value;
  data.website = enquiryform["website"].value;
  data.product = enquiryform["product"].value;
  data.message = enquiryform["message"].value;

  $.ajax("http://127.0.0.1:8000/contact/enquiry/", {
    type: "POST",
    data: data,
    success: function (data,textStatus,jqXHR) {
      swal("Success!", `${data.statusMessage}`, "success");
    },
    error: function (jqXHR,textStatus,errorThrown) {
      console.log(errorThrown);
      swal("Error!", `${data.statusMessage}`, "error");
    },
  });
});
