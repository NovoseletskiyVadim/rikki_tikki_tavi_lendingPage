
$(window).resize(function(){
    var w = $(window).width();
    var menu 	= $('.mobileMenu');
    console.log('w='+w);
    if(w > 767 && menu.is(':hidden')) {

        $(window).scroll(function(){
            var docscroll=$(document).scrollTop();
            
            console.log('scrollllll' );
            if(docscroll>124){
                $('nav').addClass('fixed');
            
            }else{
              $('nav').removeClass('fixed');
            }
          });
        
        
    }
    
});



