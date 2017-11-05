//= js-assets/functions

var navButton = document.getElementById("jsBurgerMenu");
var navMenu = document.getElementById("jsNav");

navButton.addEventListener("click", function() {
  if (navMenu.classList.contains("hide-menu")) {
    navMenu.classList.remove("hide-menu");
    navMenu.classList.add("show-menu");
  } else {
    navMenu.classList.remove("show-menu");
    navMenu.classList.add("hide-menu");
  }
});

var navMobileButton = document.getElementById("jsBurgerMenuMobile");
var generalBlock = document.getElementById("jsGeneral");

navMobileButton.addEventListener("click", function() {
  generalBlock.classList.toggle("slide-general-block");
  if (navMenu.classList.contains("slide-right-menu")) {
    navMenu.classList.remove("slide-right-menu");
    navMenu.classList.add("slide-left-menu");
  } else {
    navMenu.classList.remove("slide-left-menu");
    navMenu.classList.add("slide-right-menu");
  }
});
$(document).ready(function() {
  //get scrollbar width
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  $('[data-toggle="tooltip"]').tooltip();

  function openPopup(popup) {
    $(popup).fadeIn(300);
    $("body, html").addClass("forbid-scrolling");
      $("body").css('margin-right', scrollWidth);
  };
  $("body").on("click", ".brand-quick", function() {
    openPopup(".popup-quickbook-desktop");
  });
  $("body").on("click", ".brand-entrata", function() {
    openPopup(".popup-quickbooks");
  });
  $("body").on("click", ".brand-bill", function() {
    openPopup(".popup-quick-import");
  });
  $("body").on("click", ".add-doc", function() {
    openPopup(".popup-add-payer");
  });
  $("body").on("click", ".edit-doc", function() {
    openPopup(".popup-edit-payer");
  });
  $("body").on("click", ".copy-btn", function() {
    openPopup(".popup-add-recipient");
  });

  $("body").on("click", ".popup-overlay", function(e) {
    e.stopPropagation();
    if ($(e.target).hasClass("popup-overlay") || $(e.target).hasClass("popup-btn-close")) {
      console.log(this)
      $(this).fadeOut(300);
      setTimeout("$('body, html').removeClass('forbid-scrolling'); $('body').css('margin-right', 0);", 300);
    }
  })

});

// var windowWidth = $(window).width();

// $(function() {
//   if (windowWidth <= 1124) {
//     $('#jsNav').addClass('hide-menu');
//   } else {
//     // $('#jsNav').removeClass('hide-menu');
//   }
// });

// $(window).resize(function () {
//   if (windowWidth <= 1124) {
//     $('#jsNav').addClass('hide-menu');
//   } else {
//     // $('#jsNav').removeClass('hide-menu');
//   }
// });


// var windowWidth = document.body.offsetWidth
// window.onresize = function() {
//   if ( windowWidth <= 1124) {
//     navMenu.classList.add('hide-menu');
//   } else {
//     navMenu.classList.remove('hide-menu');
//   }
// }
// window.onload = function() {
//   if ( windowWidth <= 1124) {
//     navMenu.classList.add('hide-menu');
//   } else {
//     navMenu.classList.remove('hide-menu');
//   }
// }
