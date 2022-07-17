let r
let angle = 0
let time = 0
let cr
let cross
let circle
let ball
let sinGraph
let cosGraph
let cosvert
let mid
let ismid = false
let iscross = false
let iscircle = false
let isball = false
let isSinGraph = false
let isCosGraph = false
let isvert = false
let si = []
let co = []
let arrx = []
let arry = []
let slider
let is_small = false
let is_smallL = false
let is_smalle = false
let x
let y
let balls
let isballs = false
let multi = 1
let d

function setup() {
  let canv = createCanvas(1000, 1000)
  canv.parent('can-container')

  cross = createButton(" cross ")
  cross.addClass("mybutton")
  cross.mousePressed(showCross)
  cross.parent("button_container")

  circle = createButton("circle")
  circle.addClass("mybutton")
  circle.mousePressed(showCircle)
  circle.parent("button_container")

  ball = createButton("ball")
  ball.addClass("mybutton")
  ball.mousePressed(() => isball = !isball)
  ball.parent("button_container")

  mid = createButton("mid point")
  mid.addClass("mybutton")
  mid.mousePressed(() => {
    ismid = !ismid
    arrx.length = 0
    arry.length = 0
    if (is_small == false) {
      setTimeout(() => is_small = !is_small, 6000)
      setTimeout(() => is_smallL = !is_smallL, 3000)
      setTimeout(() => is_smalle = !is_smalle, 10000)
    }
    else {
      is_smallL = !is_smallL
      is_smalle = !is_smalle
      is_small = !is_small
    }
  })
  mid.parent("button_container")

  balls = createButton("balls")
  balls.addClass("mybutton")
  balls.mousePressed(() => isballs = !isballs)
  balls.parent("button_container")

  sinGraph = createButton("sin")
  sinGraph.addClass("mybutton")
  sinGraph.mousePressed(() => {
    isSinGraph = !isSinGraph
  })
  sinGraph.parent("button_container")

  cosGraph = createButton("cos")
  cosGraph.addClass("mybutton")
  cosGraph.mousePressed(() => {
    isCosGraph = !isCosGraph
  }
  )
  cosGraph.parent("button_container")

  cosvert = createButton("cosvert")
  cosvert.addClass("mybutton")
  cosvert.mousePressed(() => isvert = !isvert)
  cosvert.parent("button_container")



  let l = createElement("lable", "radius =")
  l.parent("button_container")
  l.addClass("label")

  slider = createSlider(width / 12, width / 3, width / 4, 0.5)
  slider.parent("button_container")
  slider.addClass("slider")
  slider.size(300, 10)


  let l2 = createElement("lable", "speed=")
  l2.parent("button_container")
  l2.addClass("label")

  slider2 = createSlider(0, 0.1, 0.02, 0.00001)
  slider2.parent("button_container")
  slider2.addClass("slider")
  slider2.size(300, 10)

  // setInterval(() => multi += 0.1, 3000)
  // d=createSlider(0,1.6,0.5,0.001)

  cr = width / 40

}


function draw() {
  clear()
  Style()
  translate(width / 2, height / 2)
  // rotateZ(PI/3)
  x = r * cos(angle)
  y = r * sin(angle)
  co.unshift(x)
  si.unshift(y)
  noFill()
  stroke(255)
  strokeWeight(3.5)
  r = slider.value()
  if (iscross) {
    strokeWeight(2)
    line(-r, 0, r, 0)
    line(0, -r, 0, r)

    cross.style("color", "var(--light-blue)")
    cross.style('background-color', "var(--dark)")
    let slope = -y / x
    let tt = slope * (x - 50) + y
    // line(x,0,50,tt) 
    line(x, 0, 0, y)


  }
  if (iscircle) {
    strokeWeight(5)
    ellipse(0, 0, r * 2)
    circle.style("color", "var(--light-blue)")
    circle.style('background-color', "var(--dark)")
    
  }
  if (ismid) {
    stroke(255)
    line(x, 0, 0, y)
    if (is_small) {
      showSmallc()
    }
    if (is_smalle) {
      showSmalle()
    }
    if (is_smallL) {
      showSmallL()
    }
    strokeWeight(2)
    stroke(0)
    mid.style("color", "var(--light-blue)")
    mid.style('background-color', "var(--dark)")

  }
  if (isball) showball()
  if (isSinGraph) showSinGraph()
  if (isCosGraph) showCosGraph()
  if (isvert) showCosvert()
  if (isballs) drawballs()
  noStroke()
  fill('blue')
  ellipse(x, 0, cr * 1.25, cr * 1.25)
  fill('red')
  ellipse(0, y, cr * 1.25, cr * 1.25)
  angle -= slider2.value()


}
function Style() {

  cross.style("color", "var(--dark)")
  cross.style('background-color', "var(--light-blue)")

  circle.style("color", "var(--dark)")
  circle.style('background-color', "var(--light-blue)")

  ball.style("color", "var(--dark)")
  ball.style('background-color', "var(--light-blue)")

  sinGraph.style("color", "var(--dark)")
  sinGraph.style('background-color', "var(--light-blue)")

  cosGraph.style("color", "var(--dark)")
  cosGraph.style('background-color', "var(--light-blue)")

  cosvert.style("color", "var(--dark)")
  cosvert.style('background-color', "var(--light-blue)")

  mid.style("background-color", "var(--light-blue)")
  mid.style('color', "var(--dark)")
}

function showCross() {
  iscross = !iscross
}

function showCircle() {
  iscircle = !iscircle
}

function showball() {
  noStroke()
  fill(234, 144, 16)
  ellipse(x, y, cr, cr)
  strokeWeight(3)
  stroke(0)
  let scale = 1 - (cr / r) / 2
  line(0, 0, x * scale, y * scale)
  line(x, y, 0, y)
  line(x, y, x, 0)
  ball.style("color", "var(--light-blue)")
  ball.style('background-color', "var(--dark)")
}
function drawballs() {
  stroke(255)
  noFill()
  ellipse(0, 0, r * 2)
  let num
  // if (multi % 4 != 0) {
  num = 360 / 5
  // }
  // else {num = 300 / multi +2}

  for (let i = 0; i < 360; i += num) {
    push()
    angleMode(DEGREES)
    rotate(i)
    let x2 = r * cos(degrees(angle) - i)
    let y2 = r * sin(degrees(angle) - i)
    let color = map(i, 0, 200, 0, 255)

    colorMode(HSB, 255)
    strokeWeight(2)
    stroke(255)
    fill(color, 200, 200)

    line(-r, 0, r, 0)
    line(0, -r, 0, r)
    noStroke()
    ellipse(x2, 0, 20)
    ellipse(0, y2, 20)

    noFill()
    ellipse(0, 0, r * 2)
    angleMode(RADIANS)
    pop()

  }
}

function showSinGraph() {
  sinGraph.style("color", "var(--light-blue)")
  sinGraph.style('background-color', "var(--dark)")
  beginShape()
  let sintime = 0
  for (let i = 0; i < si.length; i++) {
    noFill()
    stroke(255, 0, 0)
    vertex(sintime, si[i])
    sintime += 01
  }
  // if(si.length>3000)si.pop()
  endShape()
}

function showCosGraph() {

  cosGraph.style("color", "var(--light-blue)")
  cosGraph.style('background-color', "var(--dark)")
  beginShape()
  let costime = 0
  for (let i = 0; i < co.length; i += 1) {
    noFill()
    // fill(0,0,255)
    stroke(0, 0, 255)
    vertex(costime, -co[i])
    ellipse(costime, -co[i], 6)
    costime += 1
  }
  stroke(255)
  line(x, 0, 0, -co[0])
  endShape()
}

function showCosvert() {

  cosvert.style("color", "var(--light-blue)")
  cosvert.style("background-color", "var(--dark)")
  beginShape()
  let vert = 0
  for (let i = 0; i < co.length; i++) {
    noFill()
    stroke(0, 0, 255)
    vertex(co[i], vert)
    vert += 0.3
  }
  endShape()
}
function showSmallc() {
  arrx.unshift(x / 2)
  arry.unshift(y / 2)
  beginShape()
  stroke(255)
  for (let i = 0; i < arrx.length; i += 10) {
    // vertex(arrx[i],arry[i])
    ellipse(arrx[i], arry[i], 10, 10)
  }
  if (arrx.length > 200) {arrx.pop(); arry.pop()}
  endShape()
}
function showSmalle() {
  line(x / 2, 0, x / 2, y / 2)
  line(0, y / 2, x / 2, y / 2)
  stroke("blue")
  ellipse(x / 2, 0, 10, 10)
  stroke("red")
  ellipse(0, y / 2, 10, 10)

  line(x / 2, 0, 0, y / 2)
}
function showSmallL() {
  stroke(0)
  line(0, 0, x / 2, y / 2)
}