const angInc = 0.01 // its the rate it increases its angle every frame rate

let angle =0

// this are for telling if the buttons are on or off
let circleButtonIsOn				 = false
let circlingBallButtonIsOn	 = false
let makeCircleButtonIsOn		 = false
let midPointButtonIsOn			 = false
let ballsButtonIsOn					 = false
let sinGraphButtonIsOn			 = false
let cosGraphButtonIsOn			 = false
let vertCosGraphButtonIsOn	 = false
let showDerivativeButtonIsOn = false
let isevenButtonIsOn         = false
let isAllTrigButtonOn        = false

let stop                     = false

let input

let xPoints = [] // for collecting value of x's
let yPoints  = [] // for collecting value of y's


// this is where things start it runs only ones
function setup(){ 
	const can = createCanvas(windowWidth,windowHeight) // creates a HTML5 canvas
	can.parent('can-container')


	const circleButton       = makeButton("Circle","circleButton",()=>{circleButtonIsOn=!circleButtonIsOn})

	const circlingBallButton = makeButton("Circling Ball","circlingBallButton",()=>{circlingBallButtonIsOn=!circlingBallButtonIsOn}) 

	const makeCircleButton   = makeButton("make circle","makeCircleButton",()=>{makeCircleButtonIsOn=!makeCircleButtonIsOn})

	const midPointButton     = makeButton("show mid", "midPointButton",()=>{midPointButtonIsOn=!midPointButtonIsOn})

	const ballsButton        = makeButton("Balls","ballsButton",()=>{ballsButtonIsOn=!ballsButtonIsOn})

	const sinGraphButton     = makeButton("sin Graph","sinGraphButton",()=>{sinGraphButtonIsOn=!sinGraphButtonIsOn})

	const cosGraphButton     = makeButton("cos Graph","cosGraphButton",()=>{cosGraphButtonIsOn=!cosGraphButtonIsOn})

	const vertCosGraphButton = makeButton("vertcal cos", "vertCosGraphButton",()=>{vertCosGraphButtonIsOn=!vertCosGraphButtonIsOn})

	const showDerivativeButton = makeButton("derivative","showDerivativeButton",()=>{showDerivativeButtonIsOn=!showDerivativeButtonIsOn})
	const isEven               = makeButton("Who is even","isEven",()=>{isevenButtonIsOn=!isevenButtonIsOn})
	const isall                = makeButton("show All trig","allTrig",()=>{isAllTrigButtonOn=!isAllTrigButtonOn})

	const stopButton           = makeButton("Stop","stopButton",()=>{stop=!stop})
	input = makeinputBox("45","#input")

}



// this function loops every frame 
function draw(){
	clear() // clears the background
	translate(width/2,height/2) // translates to the middle
  const radius =width/6
  const ballRadius = radius/8 

	const x = radius * cos(angle)
	const y = radius * sin(angle)
	const always= ()=>{ // it draws the balls always except when we make circle
		noStroke()
		fill("blue")
		ellipse(x,0,ballRadius)
		fill("red")
		ellipse(0,y,ballRadius)
    styleWhenButtonOff("#makeCircleButton")

		xPoints.length >300 ? xPoints.pop() :null
		yPoints.length >300 ? yPoints.pop() :null
	}

	xPoints.unshift(x) // adds value of x to the front of the list 
	yPoints.unshift(y)
  // its a substitute for if and else
	// if this                   then                                     else 
	circleButtonIsOn				 ? showCircle(radius)                        :styleWhenButtonOff("#circleButton")
	circlingBallButtonIsOn	 ? showCirclingBall(x,y,ballRadius)          :styleWhenButtonOff("#circlingBallButton")
	makeCircleButtonIsOn		 ? makeCircle(x,y,xPoints,yPoints,radius)    :always()
	midPointButtonIsOn			 ? showMidPoint(x,y,xPoints,yPoints,radius)  :styleWhenButtonOff("#midPointButton")
	ballsButtonIsOn					 ? showBalls(radius,angle,3,ballRadius)      :styleWhenButtonOff("#ballsButton")
	sinGraphButtonIsOn       ? showSinGraph(yPoints)							       :styleWhenButtonOff("#sinGraphButton")
	cosGraphButtonIsOn       ? showCosGraph(x,xPoints)						       :styleWhenButtonOff("#cosGraphButton")
	vertCosGraphButtonIsOn   ? showCosVert(xPoints)								       :styleWhenButtonOff("#vertCosGraphButton")
	showDerivativeButtonIsOn ? derivative(x,y,radius)                    :styleWhenButtonOff("#showDerivativeButton")
	isevenButtonIsOn         ? isEven(x,y,angle,radius,ballRadius)       :styleWhenButtonOff("#isEven")
	isAllTrigButtonOn        ? allTrig(x,y,ballRadius)                              :styleWhenButtonOff("#allTrig")

	inputAngle = radians(float(-1*input.value()))  // calculates the angle from given input
	stop ? (()=>{angle =inputAngle; styleWhenButtonOn("#stopButton")})() : (()=>{angle-=angInc;styleWhenButtonOff("#stopButton")})()

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

function windowResized () { // is called when the window is resized
	resizeCanvas(windowWidth,windowHeight)
	radius  = width/6
	ballRadius = radius/8
}



// functions executed when button is Pressed
const showCircle = radius =>{
	noFill()
	strokeWeight(2.5) // sets the thickness
	stroke("white")
	ellipse(0,0,2*radius)
	stroke("blue")
	line(-radius , 0, radius, 0)
	stroke("red")
	line(0,-radius,0,radius)
  //
	s ="they look like they are moving in a stright lines <br> press the button <em>Ball</em> to see next"
	discribeText(s)
	//
	styleWhenButtonOn("#circleButton")
}
const showCirclingBall = (x, y, ballradius) =>{
	noStroke()
	fill("orange")
	ellipse(x,y,ballradius,ballradius)
  
	strokeWeight(4)
	stroke(24)
	line(0, 0, x, y) // to the middle
	line(x, y, 0, y) // from the ball to vertical line
	line(x, y, x, 0) // from the ball to horizontal line

	noFill()
	stroke('white')
	strokeWeight(2)
	arc(0,0,100,100,angle,0)
	let angleRad = round(degrees(-1*angle))
	while(angleRad<0 || angleRad>360){
		if(angleRad<0) angleRad+=360
		if(angleRad>360) angleRad-=360
	}
	textSize(25)
	text(angleRad,50*cos(radians(-1*angleRad/2)),50*sin(radians(-1*angleRad/2)))
  
	s= "but really they are drawn as the <em> vertival</em> and <em>horizontal</em> motion of circular moving ball"
	discribeText(s)
  
	styleWhenButtonOn("#circlingBallButton")
}
const makeCircle = (x, y, xs, ys, radius) =>{
	stroke(180)
	strokeWeight(2)

	line(0, radius, 2*radius, radius)
	line(0, radius, 0, -radius)
  
	noStroke()
	fill("red")
	ellipse(0,y,radius/10)
	fill("blue")
	ellipse(x+radius,radius,radius/10)
  
	stroke("red")
	line(0, y, x+radius, y)
	stroke("blue")
	line(x+radius , y, x+radius, radius)

	
	beginShape()
		stroke("yellow")
		noFill()
		xs.forEach( (value,index)=>vertex(value+radius,ys[index]) )
	endShape()
	ys.length >100 ? ys.pop(): null
	xs.length >100 ? xs.pop(): null
  
	discribeText("Did you know you can make circles out of objects moving in a straight line <br> <em>Archimedes</em> knew that")
	styleWhenButtonOn("#makeCircleButton")
}
const showMidPoint = (x, y, xs, ys, radius) => {
	stroke("white")
	strokeWeight(2)
	noFill()
	line(x,0,0,y)
  
	beginShape()
			for (let i=0; i<xs.length; i+=10){
				circle(xs[i]/2, ys[i]/2, radius/30)
			}
	endShape()
	stroke("black")
	line(0,0,x/2,y/2)
  
	const s = "so if you see the mid point between the balls that also makes a circle"
	discribeText(s)
  
	styleWhenButtonOn("#midPointButton")
}
const showBalls =(radius,angle,num,ballRadius)=> {
	stroke("white")
	strokeWeight(1)
	noFill()
	ellipse(0,0,radius*2)
	const angledivided = 360/num
  
	for (let i=0; i<360;i+=angledivided){
		push()
			angleMode(DEGREES)
			rotate(i)
			const xi = radius * cos(degrees(angle)-i)
			const yi = radius * sin(degrees(angle)-i)
			
			let hue = map (i,0,360,0,255)
			colorMode(HSB,255)
			strokeWeight(2)
			fill(hue,255,200)
			stroke(hue,255,200)
			line(-radius,0,radius,0)
			line(0,-radius,0,radius) // 90 deg oposite of the privious line
			ellipse(xi,0,ballRadius)
			ellipse(0,yi,ballRadius)
      //
		pop()
	}
		angleMode(RADIANS)
		styleWhenButtonOn("#ballsButton")
	//
		s = "the original balls only track the <em> vertical </em> and <em>horizontal</em> but if we track in diffrent directions it gives this"
		discribeText(s)
}
const showSinGraph = ys =>{
	 beginShape()
		 let sintime =0
		 const skipTime = 10
		 noFill()
		 stroke("red")
		 strokeWeight(2)
		 for(let i=0; i<ys.length;i+=skipTime){
			 vertex(sintime,ys[i])
			 sintime+=skipTime
		 }
	 endShape()

	 if(isevenButtonIsOn){
	    beginShape()
		   let sintime2 =0
			 for(let i=0; i<ys.length;i+=skipTime){
				 vertex(sintime2,-ys[i])
				 sintime2+=skipTime
			 }
	    endShape()
	 }
	discribeText("if we track the vertical ball in time it we draw a <em>sin Graph</em>")
	 styleWhenButtonOn("#sinGraphButton")
}
const showCosGraph = (x, xs ) =>{
	 beginShape()
		 let costime =0
		 const skipTime = 10
		 noFill()
		 stroke("blue")
		 strokeWeight(2)
		 for(let i=0; i<xs.length;i+=skipTime){
			 vertex(costime,xs[i])
			 costime+=skipTime
		 }
	endShape()
	stroke("white")
	line(x,0,0,xs[0])
	discribeText("if we track the Horizontal ball in time it we draw a <em>cos Graph</em>")
	styleWhenButtonOn("#cosGraphButton")
}
const showCosVert = xs =>{
	 beginShape()
		 let costime =0
		 const skipTime = 10
		 noFill()
		 stroke("blue")
		 strokeWeight(2)
		 for(let i=0; i<xs.length;i+=skipTime){
			 vertex(xs[i], costime)
			 costime+=skipTime
		 }
	endShape()
	// 
	xs.length >600 ? xs.pop():null
	styleWhenButtonOn("#vertCosGraphButton")
}
const derivative = (x,y,radius) =>{
	strokeWeight(2.5)
	stroke(255)
	noFill()
	ellipse(0,0,2*radius)
	push()
		translate(x,y)
		stroke("blue")
		line(-radius, 0, radius, 0)
		stroke("red")
		line(0, -radius, 0, radius)
		// 
		stroke("yellow")
		rotate(angle)
		line(0,-radius,0,radius)
	pop()
	discribeText("As we all know derivative is the <em>slope(tangent)</em> of the graph in this animation we can see that if we draw vertical and horizontal lines from the tanget we can easily see that the ball moving horizontally in the center now it's moving vertically in the tangent and vice versa this means <em>cos derivative is -sin(inverted sin)</em> and sin's derivative is cos")
	styleWhenButtonOn("#showDerivativeButton")
}
const isEven = (x,y,angle,radius,ballRadius) =>{
	const negetiveAngle = - angle
	noFill()
	strokeWeight(5)
	stroke('green')
	ballPositive = ellipse(x,y,ballRadius)

	strokeWeight(2)
	line(0, 0, x, y) // to the middle
	// line(x, y, 0, y) // from the ball to vertical line
	// line(x, y, x, 0) // from the ball to horizontal line

	const x1 = radius*cos(negetiveAngle)
	const y1 = radius*sin(negetiveAngle)

	stroke('yellow')

	line(0, 0, x1, y1) // to the middle
	// line(x1, y1, 0, y1) // from the ball to vertical line
	// line(x1, y1, x1, 0) // from the ball to horizontal line

	strokeWeight(5)
	ballNegetive     = ellipse(x1,y1,ballRadius)
  noStroke()
	fill('cyan')
	ballvertNegetive = ellipse(0,y1,ballRadius)

	noFill()
	strokeWeight(2)
	stroke('green')
	arc(0,0,100,100,angle,0)
	let angleRad = round(degrees(-1*angle))
	while(angleRad<0 || angleRad>360){
		if(angleRad<0) angleRad+=360
		if(angleRad>360) angleRad-=360
	}
	textSize(25)
	text(angleRad,50*cos(radians(-1*angleRad/2)),50*sin(radians(-1*angleRad/2)))

	stroke('yellow')
	arc(0,0,75,75,0,negetiveAngle)
	let angleRad2 = round(degrees(-1*negetiveAngle))
	while(angleRad2>0 || angleRad2< -360){
		if(angleRad2>0) angleRad2-=360
		if(angleRad2< -360) angleRad2+=360
	}
	textSize(25)
	text(angleRad2,50*cos(radians(-1*angleRad2/2)),50*sin(radians(-1*angleRad2/2)))
	discribeText("Which one looks even. <br> Even function is when f(x)=f(-x) <em>when we invert the input it still looks</em> the same the horizontal ball is the same for both negetive angle and positive so it's even function")
	styleWhenButtonOn("#isEven")
  
}
const allTrig = (x,y,ballRadius)=>{
	strokeWeight(3)
	textSize(ballRadius)
	// noFill()
  //tan
  stroke('blue')
  line(x,y,(y*y+x*x)/x,0)
  fill(0)
  text("tan",(x+(y*y+x*x)/x)/2,y/2)
  //cot
  stroke('red')
  line(0,((-x*(-x)/y)+y),x,y)
  text('cot',x/2,(((-x*(-x)/y)+y)+y)/2)
  //csc
  stroke("orange")
  line(0,0,0,((-x*(-x)/y)+y))
  text('csc',0,((-x*(-x)/y)+y)/2)
  //sec
  stroke("green")
  line(0,0,(y*y+x*x)/x,0)
  text('sec',((y*y+x*x)/x)/2,0)
  //sin
  stroke("red")
  line(x,y,x,0)
  text('sin',x,y/2)
  //cos
  stroke("blue")
  line(x,y,0,y)
  text('cos',x/2,y)

styleWhenButtonOn("#allTrig")
}

