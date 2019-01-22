
(function() {

  var scrolledTop = 0;

  window.onscroll = function logit(){
    var val = document.documentElement.scrollTop;
    //console.log(val);
    scrolledTop = val;
  }


  // Init
  var container = document.getElementById("con01"),
    inner = document.getElementById("p-click");



  //console.log("W: " + container.offsetWidth);
  //console.log("H: " + container.offsetHeight);
  var num = Math.floor(container.offsetHeight / 2);
  var num2 = container.offsetTop;
  console.log(num);
  console.log(num2);
  //console.log(container);

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
      console.log('y: ' + (this.y));
    },

    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

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
    var style = "rotateX(" + (x/2.5) + "deg) rotateY(" + (y/2.5) + "deg)";
    inner.style.transform = style;
  };


  //--------------------------------------------------

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;



})();


