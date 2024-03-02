// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("header").style.backgroundColor = "#131313";
//   } else {
//     document.getElementById("header").style.backgroundColor = "transparent";
//   }
// }


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbara") {
    x.className += " responsive";
  } else {
    x.className = "navbara";
  }
}