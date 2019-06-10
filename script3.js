
(function() {

const sr = ScrollReveal();

console.log('connected');


sr.reveal('h1');
sr.reveal('.about-copy');
sr.reveal('.nick-photo');
sr.reveal('.project-container', { delay: 200 });
sr.reveal('.sec', { delay: 200 });



var scrolledTop = 0;

window.onscroll = function logit(){
  var val = document.documentElement.scrollTop;
  //console.log(val);
  scrolledTop = val;
}




// CREATE MOUSE INSTANCE

var containers = document.getElementsByClassName("project-container");

//DEFAULTS
var container = document.getElementById("con01"),
inner = document.getElementById("inner01");

//Defining title object
var title = inner.children[0];
var filler = inner.children[1];



// Mouse
var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = ((e.clientY - this._y) * -1) - scrolledTop;
    //console.log('x: ' + (this.x = e.clientX - this._x));
    //console.log('y: ' + (this.y));
  },

  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
  },
  show: function() {
    return "(" + this.x + ", " + this.y + ")";
  }
};


// SET MOUSE ORIGIN DEPENDING ON HOVER 

function hovering(){
  var thisID = this.id;
  createMouse(thisID);
}

function createMouse(input){
  //console.log( 'input: ' + input);
  var select = document.getElementById(input);
  mouse.setOrigin(select);

  var child = select.children[0];
  title = child.children[0];
  filler = child.children[1];

  inner = child;

  select.onmouseenter = onMouseEnterHandler;
  select.onmouseleave = onMouseLeaveHandler;
  select.onmousemove = onMouseMoveHandler;

}

for(i in containers){
  containers[i].onmouseover = hovering;
}


//--------------------------------------------------

var counter = 0;
var updateRate = 1;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};

//--------------------------------------------------

var onMouseEnterHandler = function(event) {
  update(event);
  titleAppear();
};

var onMouseLeaveHandler = function() {
  inner.style = "";
  titleDisappear();
};

var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

//--------------------------------------------------

var update = function(event) {
  mouse.updatePosition(event);
  updateTransformStyle(
    (mouse.y / inner.offsetHeight/2).toFixed(2),
    (mouse.x / inner.offsetWidth/2).toFixed(2)
  );
};

var updateTransformStyle = function(x, y) {
  var style = "rotateX(" + (x/3) + "deg) rotateY(" + (y/3) + "deg)";
  inner.style.transform = style;
};





// Function to make title appear

function titleAppear(){
  title.style.display = "block";
  filler.style.opacity = 0.85;
  setTimeout(function(){ title.classList.add("t-visible") }, 150);
}

function titleDisappear(){
  title.style.display = "none";
  filler.style.opacity = 0;
  setTimeout(function(){ title.classList.remove("t-visible") }, 0);
}















})();