const rate = 0.015 // its the rate it increases its angle every frame rate
let time =0
let yPoints  = [] // for collecting value of y's
let N 


// this is where things start it runs only ones
function setup(){ 
	const can = createCanvas(windowWidth,windowHeight) // creates a HTML5 canvas
	can.parent('can-container')
	const input = makeinputBox(1,"slider") 
	 // makeButton("inc","inc",inc)
	 // makeButton("dec","dec",dec)
}

// this function loops every frame 
function draw(){
	clear() // clears the background
	translate(width/5,height/2) // translates to the middle

	noFill()
	fourior()
	let s = "N = "+(select("#slider").value())
	// let s = "N= "+N
	select("#N").html(s)
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
	radius  = width/6
	ballRadius = radius/8
}

const fourior = () =>{

	let x=0
	let y=0
	const sv = select('#slider').value()
	
	for (let i=0 ;i<sv;i++){
		let prev_x=x
		let prev_y=y
		let n=i+1;
	let radius1=20*(6/n*(pow(-1,i)));
	x+=radius1*cos(n*time)
	y+=radius1*sin(n*time)

		strokeWeight(2)
	stroke(255,100)
	ellipse(prev_x,prev_y,2*radius1)
	// stroke(255)
	stroke('blue')
	strokeWeight(3)
	line(prev_x,prev_y,x,y)}

	yPoints.unshift(y)
	fill(0,100,250)
	ellipse(x,y,8)
	translate(200,0)
	line(x-200,y,0,yPoints[0])
	beginShape()
		noFill()
		for (let i=1;i<yPoints.length;i++){
		vertex(i,yPoints[i]);
		}
	endShape()
	yPoints.length>800 ? yPoints.pop() : null
	time+=rate
}

// const dec = ()=>{N= N-1}
// const inc = () =>{N= N+1}
