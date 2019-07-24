//alert("connected");
 var numsquares=6;
 var colors=[];
 var pickedcolor;
 var squares= document.querySelectorAll(".square");
 var colordisplay=document.getElementById("colordisplay");
 var messagedisplay=document.querySelector("#message");
 var h1=document.querySelector("h1");
 var restebutton=document.querySelector("#reset");
 var modebutton=document.querySelectorAll(".mode");
    init(); 
    function init(){
    	//mode button event listner
    	setupbutton();
        for(var i=0 ; i<squares.length; i++)
		   {
		   //	add initial color to square
		   	squares[i].style.backgroundColor=colors[i];
		   	//add click listner to square
		   	squares[i].addEventListener("click", function () {
		   		// grab color of clicked square
		   		var clickedcolor = this.style.backgroundColor;
		   		//compare color to picked color
		   		//alert(pickedcolor);
		   		//alert(clickedcolor);
		   		if(clickedcolor===pickedcolor){
		   			messagedisplay.textContent="correct!!";
		   			restebutton.textContent="Play again"
		   			changecolor(clickedcolor);
		   			h1.style.backgroundColor=pickedcolor;
		   		}else{
		   			this.style.backgroundColor="#232323"; 
		   			messagedisplay.textContent="try again";
		   		}
		   	});
		   }
	    reset();
    }
  function setupbutton() {
  	for(var i=0 ; i <modebutton.length; i++){
		   modebutton[i].addEventListener("click", function(){
		   modebutton[0].classList.remove("selected");
	       modebutton[1].classList.remove("selected");
	       this.classList.add("selected");
	       //console.log("hii");
	       //figure out how many squares to show
	       //pick new color
	       //pick a new pickedcolor
	       //update page to reflect changes
	       this.textContent==="Easy"?numsquares=3:numsquares=6;
	       reset();
        });
      }
  }

 
 function reset(){
 	colors=generaterandomcolor(numsquares);
    //pick a new random color from array
    pickedcolor=pickcolor();
    //change colordisplay to the matched color
    colordisplay.textContent=pickedcolor; 
    restebutton.textContent="New colors";
    messagedisplay.textContent="";
    //change color of square
    for(var i=0 ; i < squares.length; i++){
    	if(colors[i]){
    		squares[i].style.display="block";
    	    squares[i].style.backgroundColor=colors[i];
    	}else{
    		squares[i].style.display="none";
    	}
    }
    h1.style.backgroundColor="steelblue";

 }
 //short function setupbutton instead of  easy and hard button
 // easybutton.addEventListener("click", function(){
 // 	hardbutton.classList.remove("selected");
 // 	easybutton.classList.add("selected");
 // 	numsquares=3;
 // 	colors=generaterandomcolor(numsquares);
 // 	pickedcolor=pickcolor();
 // 	colordisplay,textContent=pickedcolor;
 // 	for(var i=0 ; i< squares.length; i++)
 // 	{
 // 		if(colors[i]){
 // 			squares[i].style.backgroundColor=colors[i];
 // 		}else{
 // 			squares[i].style.display="none";
 // 		}
 // 	}

 // });
 // hardbutton.addEventListener("click", function(){
 // 	easybutton.classList.remove("selected");
 // 	hardbutton.classList.add("selected");
 // 	numsquares=6;
 // 	colors=generaterandomcolor(numsquares);
 // 	pickedcolor=pickcolor();
 // 	colordisplay,textContent=pickedcolor;
 // 	for(var i=0 ; i< squares.length; i++)
 // 	{

 // 			squares[i].style.backgroundColor=colors[i];
 // 			squares[i].style.display="block";
 // 	}
 // });

 restebutton.addEventListener("click", function(){
    //generate all random color
     reset();
 })
   
function pickcolor()
{
	var random= Math.floor(Math.random() *colors.length);
	return colors[random];
}
function generaterandomcolor(num){
	//make an array
	var arr=[];
	//repeat it num time
	for(var i=0 ; i < num; i++)
	{
		//get random color and push it into the array
        arr.push(randomcolor());
	}
	//return the array
	return arr;
}
function randomcolor(){
	var r=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	return "rgb("+ r +", " + g + ", " +b +")" 
}
function changecolor(color){
	//loop through all squares
	//console.log("hii");
	for(var i=0 ; i <squares.length ;i++){
		//change each color to the matched color
		squares[i].style.backgroundColor=color;
	}
}
