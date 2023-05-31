const rate = 0.015 // its the rate it increases its angle every frame rate
let time =0
let angle  = [] 
let total


// this is where things start it runs only ones
function setup(){ 
	const can = createCanvas(windowWidth,windowHeight) // creates a HTML5 canvas
	can.parent('can-container')

	total = 100 

   for(let i=0;i<total ;i++){
     let index=map(i,0,total,0,4*PI);
     angle[i]=index;
   } 

}

// this function loops every frame 
function draw(){
	clear() // clears the background
	translate(width/2,height/2)
	beauty(width/10)
}



// HELPER FUNCTIONS
const discribeText = s => {
	select("#discription") // selects with id
		.html(s) // and manuplates the inner html
}

const styleWhenButtonOn = id => {
	select(id)
		.style("color","white") // adds css
		.style("background-color","black")
}

const styleWhenButtonOff = id => {
	select(id)
		.style("color","var(--carrot)")
		.style("background-color","var(--transparent)")
}

const makeButton = (name,id,actionWhenPressed) => {
	return  createButton(name)
	            .addClass("mybutton") // to style it as a button
              .id(id) //to edit it below
	            .parent("button_container")
              .mousePressed(actionWhenPressed)  // function call when button is called
}

const makeinputBox = (initalVal,id) => {
	return  createInput(initalVal)
	            .addClass("mybutton") // to style it as a button
              .id(id) //to edit it below
	            .parent("button_container")
}
const makeslider = (initalVal,finalval,step,id) =>{
	return createSlider(initalVal,finalval,step)
							.addClass("mybutton")
							.id(id)
							.parent("button_container")
}

function windowResized () { // is called when the window is resized
	resizeCanvas(windowWidth,windowHeight)
}

const beauty = (a)=>{

  for(let i=0;i<angle.length;i++){
    let y = a * sin(angle[i])
    
    // fill(255,0,y);
    stroke(255-y,0,y);
		colorMode(HSB,255)
		let t = map (y,-a,a,0,255)
		let s = map (y,-a,a,200,70)
		fill(t,s,250)
    let x=map(i,0,total-1,-width/2,width/2);
    line(x,0,x,y);
    noStroke()
    circle(x,y,width/90);
    angle[i]+=i/1100
    
  }
}
