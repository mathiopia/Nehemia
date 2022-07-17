let r ;
let angle =0;
let time =0;
let cr;
let slider;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //slider=createSlider(0,4*PI,0,0.01)
  //slider.position(0,0)//,-height*(15/16))
  //slider.sze(250,10)
  
  r= width/8;
  cr=width/40;

}

function draw() {
  background(90);
  translate(width/2,height/2)
  let x= r*cos(angle);
  let y =r*sin(angle);
  noFill();
  stroke(0);
  strokeWeight(2)

  ellipse(0,0,r*2);
  // stroke(166,166,166)
  //cross
  line(-width,0,width,0);
  line(0,-height,0,height);
  // center circle
  fill('blue');
  // ellipse(x,y,cr,cr);
  // fill('yellow')
  // ellipse(x,0,cr*1.25,cr*1.25);
  // fill('yellow')
  // ellipse(0,y,cr*1.25,cr*1.25);
  //tangent
  stroke(255,150)

  stroke(0)
  strokeWeight(2)
  let scale=1-(cr/r)/2
  //line(r*cos(angle+PI),r*sin(angle+PI),x*scale,y*scale)
  line(0,0,x,y)

  // line(-x,-y,2*x,2*y)
  stroke(255,0,0)
  point(r*cos(angle+PI),r*sin(angle+PI))

  stroke('blue')
  line(x,y,(y*y+x*x)/x,0)
  stroke('white')
  text("tan",(x+(y*y+x*x)/x)/2,y/2)
  stroke('red')
  line(0,((-x*(-x)/y)+y),x,y)
  stroke('white')
  fill('red')
  text('cot',x/2,(((-x*(-x)/y)+y)+y)/2)
 
  let scale2=2;
  //csc
 stroke('brown')
  line(0,0,0,((-x*(-x)/y)+y))
  stroke('white')
  fill('brown')
  text('csc',0,((-x*(-x)/y)+y)/2)
  //sec
  line(0,0,(y*y+x*x)/x,0)
  text('sec',((y*y+x*x)/x)/2,0)
  //sin
  stroke('pink');
  line(x,y,x,0)
  fill('pink')
  stroke('white')
  text('sin',x,y/2)
 //cos
  stroke('orange');
  line(x,y,0,y)
  fill('orange')
  stroke('white')
  text('cos',x/2,y)
  //arc
  noFill();
  stroke(255)
  arc(0,0,50,50,angle,0)

//  time-=0.01;
//  angle=map(time,0,10,0,2*PI)

 

    //angle=slider.value();
    angle-=0.01;
  
  // if(angle<-PI/2){
  //   angle=0;
  // }


}
