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














