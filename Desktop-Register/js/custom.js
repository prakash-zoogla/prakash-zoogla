
/*
 *** Script List****
 1. Index Banner Slider


 *** Function ****
 A. Input Focus

 */


/**********************************| Document Ready Start |****************************/
$(document).ready(function () {
  loading();
  $(window).scroll(function () {

  });

});


/**********************************| Document Ready End |****************************/




/**********************************| Window scroll Start |****************************/
$(window).scroll(function () {
  setTimeout(function () {
  }, 350);
});
/**********************************| Window scroll End |****************************/

/**********************************| Window Resize Start |****************************/
$(window).resize(function () {
  setTimeout(function () {

  }, 360);
});
/**********************************| Window Resize end |****************************/

/**********************************| Window Load Start |****************************/
$(window).on('load', function () {
  if ($(".ContentscrollDiv").length > 0) {
    $(".ContentscrollDiv").mCustomScrollbar();
  }
  if ($(".bnksearscrolDiv").length > 0) {
    $(".bnksearscrolDiv").mCustomScrollbar();
  }
  if ($(".bankpriScroll").length > 0) {
    $(".bankpriScroll").mCustomScrollbar();
  }
  setTimeout(function () {

  }, 360);
});
/**********************************| Window Load End |****************************/


function loading() {
  $(window).bind('load', function () {
    $('.overlay, body').addClass('loaded');
    setTimeout(function () {
      $('.overlay').css({ 'display': 'none' })
    }, 2000)
  });
}



$(function () {
  $("#floatingInput").keyup(function () {
    if (IsEmail($(this).val()) == false) {
      $('#floatingInput').addClass("is-invalid");
      $('#floatingInput').focus();
      $('#emailFormSubmit').prop('disabled', true);
      return false;
    } else {
      $('#floatingInput').removeClass("is-invalid");
      $('#emailFormSubmit').prop('disabled', false);
      $('#emailFormSubmit').removeAttr("disabled");
      return true;
    }
  });

  $("#userAction").submit(function (event) {
    $('#floatingInput').removeClass("is-invalid");
    if (IsEmail($("#floatingInput").val()) == false) {
      $('#floatingInput').addClass("is-invalid");
      $('#floatingInput').focus();
      return false;
    }
  });
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}