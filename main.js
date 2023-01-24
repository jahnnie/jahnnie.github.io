const mainPara = "I am a business technology consultant with expertise in project coordination, business analysis, and software development across several industries. My passions lie in blockchain technology and I am actively pursuing a career in this space.";


let i = 0;
let isTypeWriterDone = false;
let twSpeed = 10;

document.getElementById("btn1").addEventListener("click", myFunction);
document.getElementById("btn2").addEventListener("click", myFunction);
document.getElementById("btn3").addEventListener("click", myFunction);
document.getElementById("btn4").addEventListener("click", myFunction);

//first step is to typewriter up the opening paragraph.
//basically fill p opener element with mainPara char by char
//TODO: begin with cursor blinking then type
//TODO: type second sentence seconds after first
function typeWriter() {
	if (i < mainPara.length){
		document.getElementById("opener").innerHTML += mainPara.charAt(i);
		i++;
		setTimeout(typeWriter, twSpeed);
	}
	else{
		i=0;
		fadeIn("buttons", 70); //is this a good spot for fade in?
	}
}

//TODO: onclick main menu items - bring up clicked item, fade out 
//body, and fade in content
//fkin thing keeps running twice onclick
function myFunction(clickedId){
	fadeOut("opener", 50);
	fadeOut("buttons", 50);

	//temporary until I figure out how to callback properly
	setTimeout(function() {
		if(clickedId == "btn1"){
			window.location.href="workHistory.html"
		}
		else if(clickedId == "btn2"){
			window.location.href="projects.html"
		}
		else if(clickedId == "btn3"){
			window.location.href="about.html"
		}
		else if(clickedId == "btn4"){
			window.location.href="placeholder.html"
		}
		else{
			//console.log("failure or duplicate");
		}
	}, 1000);
}

//fade in buttons after opener loads
//not sure why I need to parse float when adding but not for sub...
function fadeIn(elementId, interval, callBack){
	let fadeTarget = document.getElementById(elementId);
	fadeTarget.style.opacity = 0;
	let fadeEffect = setInterval(function(){
		if (fadeTarget.style.opacity < 1) {
			fadeTarget.style.opacity =  parseFloat(fadeTarget.style.opacity) + 0.1;
		}
		else{
			clearInterval(fadeEffect);
			if (callBack){
				callBack(elementId);
			}
		}
	}, interval);
}

function fadeOut(elementId, interval, callBack){
	let fadeTarget = document.getElementById(elementId);
	fadeTarget.style.opacity = 1;
	let fadeEffect = setInterval(function(){
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.1;
		}
		else{
			clearInterval(fadeEffect);
			if (callBack){
				callBack(elementId);
			}
		}
	}, interval);
}

/*
function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "workHistDiv");
  newDiv.innerHTML = workHistory;
  newDiv.style.opacity = 0;
  document.body.appendChild(newDiv);
  setTimeout(function() {
  	fadeIn(newDiv.id, 70);
  }, 5000);
}
*/

typeWriter();