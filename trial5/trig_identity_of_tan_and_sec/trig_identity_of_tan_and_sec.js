let r ;
let angle =0;
let time =0;
let cr;
let slider;
let makeSlider;
let makeRotate;
let Input;
let isSlider=false;
let isRotate=false;
let isInput=false;
let light_blue
let dark
let silent
let slider2
  function setup() {
    let can=createCanvas(1000,1000);
    can.parent("box")
  

    makeSlider=createButton("You can change it to Slider mode");
    makeSlider.mousePressed(showBySlider);
    makeSlider.addClass("mybutton")
    makeSlider.parent("mybutton")


    light_blue=color(112, 248, 186)
    dark=color(30,16,20)
    silent=color(124, 180, 184)
    
    let lable=createElement("label","angle =")
    lable.addClass("label")
    lable.parent("mybutton")
    slider=createSlider(0,4*PI,0,0.01);
    // slider.style("display","inline-block")
    slider.size(300,10);
    slider.addClass("slider")
    slider.parent("mybutton")

    makeRotate=createButton("Rotate Mode is off ");
    makeRotate.mousePressed(Rotate);
    makeRotate.addClass("mybutton");
    makeRotate.parent("mybutton")
 
    
    Input=createInput("0°");
    Input.addClass("input")
    Input.parent("mybutton")

    
    let lable2=createElement("label","zoom =")
    lable2.addClass("label")
    lable2.parent("mybutton")

    slider2=createSlider(width/10,width/2,width/4,0.1)
    slider2.addClass("slider")
    slider2.parent("mybutton")
    slider2.size(300,10);

    
  
    cr=width/40;
  
  }
  
  function draw() {
      r= slider2.value()
      clear()
      translate(width/2,height/2);
      let x= r*cos(angle);
      let y =r*sin(angle);
      noFill();
      stroke(0);
      strokeWeight(2);
      
      ellipse(0,0,r*2);
      fill(255);
      ellipse(x,y,5);
      
      //cross
      line(-r,0,r,0);
      line(0,-r,0,r);
    
      stroke(0)
      line(0,0,x,y);
      fill(0);
           push();
      rotate(angle);   
      fill(255,75);
      // noStroke()
      stroke(255)
      rect(cos(angle-PI/2),sin(angle-PI/2),r,r);
      fill(255,100)
      text("1",cos(angle-PI/2)+r/2,sin(angle-PI/2)+r/2)
          pop();
         
      textSize(50);
      textAlign(CENTER)
      textStyle(BOLD);
      //tan
      stroke('white');
      push();
      translate(x,y);
      rotate(angle);
      text("tan^2(X)",-r*y/(2*x),-r*y/(2*x));
      pop();
      push();
      fill(0, 79, 255,75);
      rotate(angle);
      strokeWeight(2)
      square(r,0,-r*y/x)
      pop();
      noFill();
      stroke(255)
     
      arc(0,0,100,100,angle,0)
      //sec
      fill(255, 32, 110,75);
      text('sec^2(X)',((r*r)/x)/2,((r*r)/x)/2);
      strokeWeight(2)
      square(0,0,r*r/x);
      let i=Input.value().substring(0,Input.value().length-1)
      if(isSlider && !isRotate){ angle=-1*slider.value(); }
        
      else if(isRotate && !isSlider){ angle-=0.01; Input.html("love",true)}
    
      else{angle=radians(float(-1*i))}
      text('angle =',-width/2+100,-height/2+60)
      let anglev=round(degrees(-1*angle))
      while(anglev<0 || anglev>360){
        if(anglev<0)anglev+=360;
        if(anglev>360)anglev-=360;
      }
      // fill(234, 144, 16)
      text(anglev,-width/2+width/4.3,-height/2+60)
      text("°",-width/2+width/3.5,-height/2+60)
      textSize(20)
      fill(0)
      text(anglev,50*cos(radians(-1*anglev/2)),50*sin(radians(-1*anglev/2)))
      textSize(50)
    }
  function showBySlider(){
     isSlider=!isSlider
    if (isSlider) {
       makeSlider.html("you changed to slider");
       makeSlider.style("background-color",dark);
       makeSlider.style("color",light_blue);
   }
     else{
       makeSlider.html("You can change it to Slider mode")
       makeSlider.style("background-color",light_blue);
       makeSlider.style("color",dark);
     }
     
  }
  function Rotate(){
     isRotate=!isRotate
      if (isRotate){
     makeRotate.html("Rotate Mode is on")
     makeRotate.style("background-color",dark);
     makeRotate.style("color",light_blue);
    }
     else{
     makeRotate.html("you can change it to Rotate mode")
     makeRotate.style("background-color",light_blue);
     makeRotate.style("color",dark);
    
    }
    
  }

