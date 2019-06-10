var minimized = false;

var topHam = document.getElementById('h-1');
var bottomHam = document.getElementById('h-2');
var linksContainer = document.getElementById('links-container');

function hamClick(){
	
	if(minimized){
		topHam.classList.remove("minimize1");
		bottomHam.classList.remove("minimize2");
		minimized = false;
		slideOut();

	}else {
		topHam.classList.add("minimize1");
		bottomHam.classList.add("minimize2");
		minimized = true;
		slideIn();
	}

}



function slideIn(){
	linksContainer.style.display = "block";

	setTimeout(function(){ linksContainer.classList.add("appeared") }, 200);
}


function slideOut(){
	linksContainer.style.display = "none";

	setTimeout(function(){ linksContainer.classList.remove("appeared") }, 200);
}



// Function for the hover state of the home button animation 
var n = document.getElementById('path01');
var r = document.getElementById('path02');
var layer2 = document.getElementById('Layer_2');

var nSwitch = "M137-.11v128H100.57L38,61.53v66.35H-.42V-.11H38L98.57,65.63V-.11Z";
var rSwitch = "M213.84,100.49v27.39h-50V106.49c0-12-8.07-14.6-40.06-14.6H49.58v36h-50V-.11H154.17c36.2,0,64.2,11,64.2,44,0,23.68-14,32.62-32.64,36C207.24,82.14,213.84,87.75,213.84,100.49Zm-59.67-42c8,0,14.21-2,14.21-9.6,0-7-6.21-9-14.21-9H49.58v18.6Z";

var nOriginal = "M211.57-.11v128h-50l-112-76.35v76.35h-50V-.11h50l112,77.74V-.11Z";
var rOriginal = "M139.84,100.49v27.39h-50V106.49c0-12-5.84-14.6-25.06-14.6H49.58v36h-50V-.11H80.17c36.2,0,64.2,11,64.2,44,0,23.68-14,32.62-32.64,36C133.24,82.14,139.84,87.75,139.84,100.49Zm-59.67-42c8,0,14.21-2,14.21-9.6,0-7-6.21-9-14.21-9H49.58v18.6Z";

function homeHover(){
	n.setAttribute('d', nSwitch);
	r.setAttribute('d', rSwitch);
	layer2.style.marginRight = "-3px";
}

function homeOut(){
	n.setAttribute('d', nOriginal);
	r.setAttribute('d', rOriginal);
	layer2.style.marginRight = "-15px";
}










