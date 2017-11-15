//= js-assets/functions

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

  $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('tab-active');
      $('.tab-content').removeClass('tab-active');

      $(this).addClass('tab-active');
      $("#"+tab_id).addClass('tab-active');
  })

  $('.input-daterange input').each(function() {
    $(this).datepicker('clearDates');
  });

  var navButton = $("#jsBurgerMenu");
  var navMenu = $("#jsNav");

  navButton.on("click", function() {
    if (navMenu.hasClass("hide-menu")) {
      navMenu.removeClass("hide-menu");
      navMenu.addClass("show-menu");
      $(".main-content ").removeClass("hide-after");
    } else {
      navMenu.removeClass("show-menu");
      navMenu.addClass("hide-menu");
      $(".jsNavSublist").slideUp();
      $(".main-content ").addClass('hide-after');
    }
  });

  var navMobileButton = $("#jsBurgerMenuMobile");
  var generalBlock = $("#jsGeneral");
  
  navMobileButton.on("click", function() {
  generalBlock.toggleClass("slide-general-block");
  if (navMenu.hasClass("slide-right-menu")) {
    navMenu.removeClass("slide-right-menu");
    navMenu.addClass("slide-left-menu");
    $(".jsNavSublist").slideUp();
  } else {
      navMenu.removeClass("slide-left-menu");
      navMenu.addClass("slide-right-menu");
    }
  });

  $(".jsSubMenu > a").click(function(){
    if (navMenu.hasClass("hide-menu")) {
      navButton.click();
    }
    $(".jsNavSublist").slideUp();
     if ($(this).next().is(":visible")) {
        $(this).next().slideUp();
     } else {
        $(this).next().slideToggle();
     }
  });
    $(".jsSubMenu").click(function(){
	   $(".jsSubLink, .jsSubMenu a").removeClass('active');
	   $(this).addClass('active');
	}),
    $('.jsSubLink').click(function(){
	   $('.jsSubLink').removeClass('active');
	   $(this).addClass('active');
  });

  $(".jsNavList").on("click", "li", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

$(window).resize(function() {
  var windowWidth = $(window).width();
  var navMenu = $("#jsNav");
  var generalBlock = $("#jsGeneral");
  
  if (windowWidth >= 1770) {
    navMenu.removeClass("slide-right-menu");
    navMenu.removeClass("slide-left-menu");
    if (generalBlock.hasClass("slide-general-block")) {
      generalBlock.removeClass("slide-general-block");
    }
  }
  if (windowWidth <= 1770) {
    navMenu.removeClass("hide-menu");
    navMenu.removeClass("show-menu");
  }
});
      