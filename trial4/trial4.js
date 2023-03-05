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
let sins = []
let coss = []
let slider
let is_small = false
let is_smallL = false
let is_smalle = false
let x
let y
let balls
let isballs = false
let multi = 1
let sincirclebutton
let isSincicle = false

function setup() {
  let width = windowWidth / 1.5
  let height = windowHeight / 1.1
  let canv = createCanvas(width, height)
  canv.parent('can-container')
  $(document).ready(() => {
    $(".container").hide()
    $("#begin2").hide()
    $("#begin3").hide()
    $("#begin4").hide()
    $("#begin").hide(500)
    $("#begin2").show(800)
    $("#begin3").show(1300)
    for (let i = 1; i < 2; i++) {
      $("#begin4").show(1500, function () {
        let move = 200*i
        $("#p").animate({left: move})
        $("#p").animate({top: move})
        $("#p").animate({
          left: 0,
          top: move
        })
        $("#p").animate({
          left: 0,
          top: -move
        })

      })
    }
    setTimeout(() => {

      $("#begin2").slideUp(2000)
      $("#begin3").fadeOut(3000)
      $("#begin4").fadeOut(4000)
      $(".container").show(3000)

    }, 2000)


  })

  sincirclebutton = createButton("make circle")
  sincirclebutton.addClass("mybutton")
  sincirclebutton.mousePressed(() => {
    isSincicle = !isSincicle
    sins.length = 0
    coss.length = 0
  })
  sincirclebutton.parent("button_container")

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
  slider.size(250, 10)


  let l2 = createElement("lable", "speed=")
  l2.parent("button_container")
  l2.addClass("label")

  slider2 = createSlider(0, 0.1, 0.02, 0.00001)
  slider2.parent("button_container")
  slider2.addClass("slider")
  slider2.size(250, 10)


  cr = width / 40

}


function draw() {
  clear()
  Style()
  translate(width / 2, height / 2)
  x = r * cos(angle)
  y = r * sin(angle)
  co.unshift(x)
  si.unshift(y)
  sins.unshift(y)
  coss.unshift(x)
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
  }
  if (iscircle) {
    strokeWeight(5)
    ellipse(0, 0, r * 2)
    circle.style("color", "var(--light-blue)")
    circle.style('background-color', "var(--dark)")
    // ellipse(x, y, r * 2)

    // ellipse(x, y, 10, 10)
    push()
    translate(x, y)
    // line(-r, 0, r, 0)
    // line(0, -r, 0, r)
    stroke(200, 60)
    // ellipse(x, y, r * 2)
    stroke('red')
    rotate(angle)
    // line(0, -r, 0, r)
    pop()
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
  if (isSincicle) showSinCircle()
  else {
    noStroke()
    fill("blue")
    ellipse(x, 0, 30)
    fill('red')
    ellipse(0, y, 30)
    ellipse(0, height)
  }

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

  sincirclebutton.style("background-color", "var(--light-blue)")
  sincirclebutton.style('color', "var(--dark)")

  balls.style("background-color", "var(--light-blue)")
  balls.style('color', "var(--dark)")
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
  num = 360 / 5

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
    balls.style("color", "var(--light-blue)")
    balls.style('background-color', "var(--dark)")

  }
}

function showSinGraph() {
  sinGraph.style("color", "var(--light-blue)")
  sinGraph.style('background-color', "var(--dark)")
  beginShape()
  let sintime = 0
  for (let i = 0; i < si.length; i+=10) {
    noFill()
    stroke(255, 0, 0)
    vertex(sintime, si[i])
    sintime += 10
  }
  // if(si.length>3000)si.pop()
  endShape()
}

function showCosGraph() {

  cosGraph.style("color", "var(--light-blue)")
  cosGraph.style('background-color', "var(--dark)")
  beginShape()
  let costime = 0
  stroke(0, 0, 255)
  for (let i = 0; i < co.length; i += 10) {
    vertex(costime, -co[i])
    noFill()
    costime += 10
  }
  endShape()
  stroke(255)
  line(x, 0, 0, -co[0])

}

function showCosvert() {

  cosvert.style("color", "var(--light-blue)")
  cosvert.style("background-color", "var(--dark)")
  beginShape()
  let vert = 0
  for (let i = 0; i < co.length; i+=10) {
    noFill()
    stroke(0, 0, 255)
    vertex(co[i], vert)
    vert += 10
  }
  endShape()
}
function showSmallc() {
  arrx.unshift(x / 2)
  arry.unshift(y / 2)
  beginShape()
  stroke(255)
  for (let i = 0; i < arrx.length; i += 10) {
    ellipse(arrx[i], arry[i], r / 30, r /30)
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

function showSinCircle() {

  push()
  stroke(180)
  strokeWeight(10)
  line(0, r, r + r, r)
  line(0, r, 0, -r)
  pop()
  noStroke()
  fill("red")
  ellipse(0, y, 30)
  fill("blue")
  ellipse(x + r, r, 30)
  stroke(0)
  fill(255)
  ellipse(x + r, y, 10)
  stroke(255)

  stroke('blue')
  line(x + r, y, x + r, r)
  stroke('red')
  line(0, y, x + r, y)

  beginShape()
  stroke('green')
  stroke(255)
  strokeWeight(8)
  noFill()
  for (let i = 0; i < sins.length; i++) {
    vertex(coss[i] + r, sins[i])
  }

  endShape()
  if (coss.length > 200 || sins.length > 200) {
    coss.pop()
    sins.pop()
  }
  sincirclebutton.style("color", "var(--light-blue)")
  sincirclebutton.style('background-color', "var(--dark)")
}



