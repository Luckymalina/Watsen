$(document).ready(function(){

  $('.slick').slick({
        arrows: false,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        adaptiveHeight: true,
    });
  });

  var h = window.innerHeight;

  var menuActive = false;
  var menuWidth = $('#left').width();

  $('.page-sidebar__btn--left').click(function(){

          if (!menuActive) {
              $('.page-sidebar__btn--left').animate({'margin-left':menuWidth+'px'}, 250);
              $('.page-sidebar--left').animate({left:'0'}, 250);
              $('.page-sidebar__btn--left').addClass('open');
          }
          else {
              $('.page-sidebar__btn--left').animate({'margin-left':'0px'}, 250);
              $('.page-sidebar--left').animate({left:'-'+menuWidth+'px'}, 250);
              $('.page-sidebar__btn--left').removeClass('open');
          }

          $('#btns_map_sidebar').animate({'margin-right':0}, 250);
          $('#map_sidebar').animate({right:'-'+menuWidth+'px'}, 250, function(){
              $('.btn_map_sidebar').removeClass('active');
              $('.block_map_sidebar').removeClass('active');
          });
          sidebarActive = false;
          menuActive = !menuActive;
          activeBtn = false;
      });

})
