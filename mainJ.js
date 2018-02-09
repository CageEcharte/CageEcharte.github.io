jQuery(document).ready(function(){

  $(window).resize(function(){
          if(window.innerWidth < 1100) {
              $( "div" ).removeClass( "container" );
              console.log("it works");
          }
  });
  
    jQuery(".yeah").mouseover(function(){
    jQuery(".yeah").css("background-color", "white");
      });
    jQuery(".yeah").mouseout(function(){
    jQuery(".yeah").css("background-color", "transparent");
});



jQuery(".yeah2").mouseover(function(){
jQuery(".yeah2").css("background-color", "white");
  });
jQuery(".yeah2").mouseout(function(){
jQuery(".yeah2").css("background-color", "transparent");

});


jQuery(".yeah3").mouseover(function(){
jQuery(".yeah3").css("background-color", "white");
  });
jQuery(".yeah3").mouseout(function(){
jQuery(".yeah3").css("background-color", "transparent");
});

jQuery("#arrow").click(function() {
    jQuery('html,body').animate({
        scrollTop: jQuery(".base").offset().top},
        'slow');
});

jQuery(".yeah2").click(function() {
    jQuery('html,body').animate({
        scrollTop: jQuery(".baseEnd").offset().top},
        'slow');
});

;


/*window.onload = function(){
   setInterval(function(){
jQuery("#arrow").toggle( "bounce", {times: 3}, "slow" );
   }, 10);
};*/

//GO BACK TO THE PARALAX VIDEO FOR MOBILE DEVICES!!!!
//!!!!!!!!!!!!!!!!!!!
//sources https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click

//source paralax video

//source background white space fix: https://teamtreehouse.com/community/removing-white-space-between-vertical-or-horizontal-divs



});



function fadeIn(element) {
   element = document.getElementById('image');
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 50);
}

function fadeOut(element) {
  element = document.getElementById('image');
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 50);
}

/*function fadeOutAndfadeIn(image){
  image = document.getElementById('image');
	var opacity = 1;
	var timer = setInterval(function(){
		if(opacity < 0.1 && image.src === 'https://imagizer.imageshack.com/v2/280x200q90/923/Fz1Mjw.jpg'){
			clearInterval(timer);
      console.log("it works");
			//swap the image, and fadeIn, which is the same as above function
      setTimeout(function(){ image.src = 'https://imagizer.imageshack.com/v2/280x200q90/922/uOhKpX.jpg'; }, 3000);

      fadeIn(image);
      } else if(opacity < 0.1 && image.src === 'https://imagizer.imageshack.com/v2/280x200q90/922/uOhKpX.jpg'){
        image.src = 'https://imagizer.imageshack.com/v2/280x200q90/923/Fz1Mjw.jpg';
        fadeIn(image);
      }
		image.style.opacity = opacity;
		opacity -=  0.1;

	}, 50);
}*/

var count = 0;

function change(){
var image = document.getElementById('image');

if(count === 0) {
 fadeOut();
 count = 1;
} else if(count === 1){
  image.src = 'https://imagizer.imageshack.com/v2/640x480q90/922/wZZRgW.jpg';
  fadeIn();
  count = 2;
} else if(count === 2){
  fadeOut();
  count = 3;
} else if(count === 3){
  image.src = 'https://imagizer.imageshack.com/v2/640x480q90/922/h21X3V.jpg';
  fadeIn();
  count = 4;
} else if(count === 4){
  fadeOut();
  count = 5
} else if(count === 5){
  image.src = 'https://imagizer.imageshack.com/v2/640x480q90/922/NCrTxc.jpg';
  fadeIn();
  count = 6;
} else if(count === 6){
  fadeOut();
  count = 7;
} else if(count === 7){
  image.src = 'https://imagizer.imageshack.com/v2/640x480q90/922/Lk0kux.jpg';
  fadeIn();
  count = 0;
}

}
function start(){
setInterval('change();', 2000);
}

start();
