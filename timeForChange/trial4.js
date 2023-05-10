const w = 2
const r = 400
let time = 0
let cirlingBall1 
function setup() {
	const width = windowWidth/1.4
	const height = windowHeight/1.03
	const can = createCanvas(width,height)
	can.parent('can-container')
	cirlingBall1 = new cirlingBall(r,w)
}

function draw() {
	background(255)
	cirlingBall1.circles(time)
	time+=0.01

}
class cirlingBall {
	cirlingBall(r,w){
		this.r = r
		this.w = w
	}
	circles(time){
		translate(width/2,height/2)
		const x = this.r * sin(this.w * time)
		const y = this.r * cos(this.w * time)
		fill(0)
		circle(x,y, this.r)
	}
}
