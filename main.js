$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})



$("#leftMenu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},1000);
    
})



$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


window.onload = function() {
   
    countDownToTime("11 november 2024 5:30:00");
  }

  function countDownToTime(countTo) {
  
        let partyTime = new Date(countTo);
    partyTime = (partyTime.getTime()/1000);

    let timeNow = new Date();
    timeNow = (timeNow.getTime()/1000);

    timeDifference = (partyTime- timeNow);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let minutes = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secondes = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (minutes * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ minutes } m`);
    $('.seconds').html(`${ secondes} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }



  var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var amount = maxLength-length;
  if(amount<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(amount);
        }
});
