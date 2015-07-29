


$(document).ready(function(){
  $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(350); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(350); //.fadeOut(205)
        }
    );  

  
});


$(document).ready(function(){
  $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption2').slideDown(350); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption2').slideUp(350); //.fadeOut(205)
        }
    );  

  
});

