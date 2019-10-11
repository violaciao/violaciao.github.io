// Write our JavaScript in here
var pics = [
	"imgs/1.jpg", 		//0
	"imgs/2.jpg", 	//1
	"imgs/3.jpg", 	//2
	// "imgs/4.jpg", 	  	//3
	// "imgs/5.jpg", 		//4
	// "imgs/6.jpg" 		//5
								//6
]

var btn = document.querySelector("button")
var img = document.querySelector("img")
var counter = 1

btn.addEventListener("click", function(){
	if(counter === 6){
		counter = 0
	}
	img.src = pics[counter]
	counter = counter + 1
});


var btn = document.querySelector("button")
var img = document.querySelector("img")
var counter = 1

btn.addEventListener("click", function(){
	if(counter === 3){
		counter = 0
	}
	img.src = pics[counter]
	counter = counter + 1
});
