let angle = []
let r = 10
let circles = []
let total
let angleV = []
let h
function setup() {
  createCanvas(1000, 1000)
  total = floor(width / r) - 1
  h = height / 3
  for (let i = 0; i < total; i++) {
    angle[i] = 0
    angleV[i] = i / 2000
  }

}

function draw() {
  background(100)
  translate(width / 2, height / 2)

  for (let i = 0; i < angle.length; i++) {
    let y = map(sin(angle[i]), -1, 1, -h, h)
    let x = map(i, 0, total - 1, -width, width)

    stroke(x, 0, 255)
    let c = map(y, -h, h, 0, 360)
    fill(0, c, 250)

    line(x, 0, x, y)
    noStroke()
    circle(x, y, r * 2)
    angle[i] += angleV[i]
  }
}
