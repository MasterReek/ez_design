
$(document).ready( function() {


    $("#pagetop").click(function(){
        
        var speed = 600; 
        var position = 0;
 
        $('body,html').animate({scrollTop:position}, speed, 'easeInOutQuint');
        return false;
 
    });

    $(".bMenu").click(function(){
        $('.menu-trigger').toggleClass('active');
        $("header ul").toggleClass('active');

    });

        
    //Current on current page
    $('header ul a').each(function(){
        var $href = $(this).attr('href');
        if(location.href.match($href)) {
            $(this).addClass('current');
        } else {
            $(this).removeClass('current');
        }
    });


  
    //EnterKeyFix
    $("form input[type!=image][type!=button][type!=submit][type!=reset],form select").keypress(function(e){
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        return false;
        }else{
        return true;
        }
    });
  
    if($('#load-target').length){
        
        $('#load-target').imagesLoaded(function(){ // id=”container”内の全画像のローディングが完了呼　　
            LoadWait();
        });
    }
    
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

// $(window).on('load', function(){
    
//     setTimeout(function(){
//         $('.loader').addClass('active');
//     },400);
// });


function LoadWait() {
   
    setTimeout(function(){
        $('.loader').addClass('active');
    },400);
}