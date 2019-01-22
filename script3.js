
(function() {

const sr = ScrollReveal();


sr.reveal('h1');
sr.reveal('.project-container', { delay: 200 });



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
  console.log('this id: ' + thisID);
  createMouse(thisID);
}

function createMouse(input){
  console.log( 'input: ' + input);
  var select = document.getElementById(input);
  mouse.setOrigin(select);

  var child = select.children[0];

  inner = child;

  select.onmouseenter = onMouseEnterHandler;
  select.onmouseleave = onMouseLeaveHandler;
  select.onmousemove = onMouseMoveHandler;

}

for(i in containers){
  containers[i].onmouseover = hovering;
  //console.log('added');
}



// Track the mouse position relative to the center of the container.










//containers.mouseover = console.log(this.id);

// Init


//--------------------------------------------------

var counter = 0;
var updateRate = 1;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};

//--------------------------------------------------

var onMouseEnterHandler = function(event) {
  update(event);
};

var onMouseLeaveHandler = function() {
  inner.style = "";
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




//--------------------------------------------------

//container.onmouseenter = onMouseEnterHandler;
//container.onmouseleave = onMouseLeaveHandler;
//container.onmousemove = onMouseMoveHandler;


/*
for(i in containers){
  containers[i].onmouseenter = onMouseEnterHandler;
  containers[i].onmouseleave = onMouseLeaveHandler;
  containers[i].onmousemove = onMouseMoveHandler;
}*/



})();