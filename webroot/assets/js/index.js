
$(document).ready( function() {


    $("#pagetop").click(function(){
        
        var speed = 600; 
        var position = 0;
 
        $('body,html').animate({scrollTop:position}, speed, 'easeInOutQuint');
        return false;
 
    });

});

$(window).scroll(function(){
 

    if ($(this).scrollTop() > 100) {

        var ua = navigator.userAgent;
       
        if (ua.indexOf('iPhone') > 0 /* || ua.indexOf('Android') > 0 */ && ua.indexOf('Mobile') > 0) {
        
            
        } else if (ua.indexOf('iPad') > 0 /* || ua.indexOf('Android') > 0 */ ) {

            $('header').addClass('scroll');

            

        } else {
            
            if($(window).width() > 767){//元は767

                $('header').addClass('scroll');
              
            }

        }


        $('#pagetop').addClass('active');

    }
   
    else {
        $('header').removeClass('scroll');
        $('#pagetop').removeClass('active');
    }

});