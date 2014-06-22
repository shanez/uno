$(document).ready(function() {

  $('body').removeClass('no-js');

  var currentlyShowing = null;

  $('a.blog-button').click(function() {
    if(!currentlyShowing) {
        if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
        currentWidth = $('.panel-cover').width();
        if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.content-wrapper').addClass('animated slideInRight');
        } else {
        $('.panel-cover').css('max-width',currentWidth);
        $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function() {} );
        }
    }
  });

  function hideAndShow(show) {
    if(currentlyShowing) $(currentlyShowing).hide();
    $(show).show();
    currentlyShowing = show;
  }

  var pages = ["outdoorsy", "isms", "blog"];

  function buttonClicked(e){
    hideAndShow($(e.target.href.split('/').reverse()[0]));
  }

  for(var i=0;i<pages.length;i++){
    var page = pages[i];
    $("#"+page+"-button").click(buttonClicked);
    $("#"+page).hide();

      if (window.location.hash) {
        if(window.location.hash == "#"+page) {
            hideAndShow($("#"+page));
            $('.panel-cover').addClass('panel-cover--collapsed');
        }
      }
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });


    // Responsive slides
    $(".rslides").responsiveSlides({
        speed: 1000,
        maxwidth: 800,
        // namespace: "transparent-btns"
        // pager: true,
    });

});
