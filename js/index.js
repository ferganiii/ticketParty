


 $('.tex').on('click', function () {
  
 $('.s2').not($(this).next()).slideUp(500);
 $(this).next().slideToggle(500);
});


const now=new Date("jul 11 , 2025, 2:58:22").getTime();

setInterval(function(){
 const datNow=new Date().getTime();

    const dateDffr = now - datNow ;


      const day=Math.floor(dateDffr / (1000*60*60*24)) ;
      const hours =Math.floor(  (dateDffr % (1000*60*60*24))/(1000*60*60)) ;
     const minutes=Math.floor(dateDffr %(1000*60*60)/(1000*60)) ;
     const seconds=Math.floor(dateDffr %(1000*60)/(1000)) ;


       document.querySelector('.days').innerHTML=day;
       document.querySelector('.hours').innerHTML=hours;
       document.querySelector('.minutes').innerHTML=minutes;
       document.querySelector('.seconds').innerHTML=seconds;

} , 1000)


$(document).ready(function() {
    $('.char').on('input', function() {
        const maxLength = 100;
        const currentLength = $(this).val().length;
        const remaining = maxLength - currentLength;
        $('.char').text(remaining);
    });
});



var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
    $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});


$('.nav-link').on('click' , function(){

   const secID= $(this).attr('href');

    const res = $(secID).offset();

    $('html , body').animate({scrollTop:res.top } ,500)

   

})