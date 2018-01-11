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

  $('.btn_map_menu').click(function(){

          if (!menuActive) {
              $('#btn_map_menu').animate({'margin-left':menuWidth+'px'}, 250);
              $('#left').animate({left:'0'}, 250);
              $('.btn_map_menu').addClass('active');
          }
          else {
              $('#btn_map_menu').animate({'margin-left':'0px'}, 250);
              $('#left').animate({left:'-'+menuWidth+'px'}, 250);
              $('.btn_map_menu').removeClass('active');
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
