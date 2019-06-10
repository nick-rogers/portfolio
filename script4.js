const sr = ScrollReveal();

console.log('connected');


//Scroll Reveal Elements

sr.reveal('h1');
sr.reveal('.about-copy');
sr.reveal('.nick-photo');
sr.reveal('.project-container', { delay: 200 });
sr.reveal('.sec', { delay: 200 });




// Tilt JS Elements

const tilt = $('.inner');

$('.inner').tilt({
    perspective: 1000,
    maxTilt: -0.2,
    transition: true
});










var scrolledTop = 0;

window.onscroll = function logit(){
  var val = document.documentElement.scrollTop;
  //console.log(val);
  scrolledTop = val;
}



// Function to make title appear

function titleAppear(){
  //title.style.display = "block";
  //setTimeout(function(){ title.classList.add("t-visible") }, 150);
}

function titleDisappear(){
  //title.style.display = "none";
  //setTimeout(function(){ title.classList.remove("t-visible") }, 150);
}






titleAppear();

titleDisappear();








