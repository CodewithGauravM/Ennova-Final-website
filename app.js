AOS.init();


document.querySelector('.mobile').style.display = "none";


function handleMenu() {
    document.querySelector('.mobile').style.display = "flex";
}

function handleClose() {
    document.querySelector('.mobile').style.display = "none";
}

// (function($){
// 	$(document).ready(function(){
// 		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
// 			event.preventDefault(); 
// 			event.stopPropagation(); 
// 			$(this).parent().siblings().removeClass('open');
// 			$(this).parent().toggleClass('open');
// 		});
// 	});
// })(jQuery);


$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
});

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();