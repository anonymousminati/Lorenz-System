let xcord = 0.01;
  let ycord = 0;
  let zcord = 0;
  let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;
  
  let a = 10; //σ
  let b = 28 ; //ρ
  let c = 8.0 / 3.0; //β
  
  let points = new Array();
  
  function setup() {
    createCanvas(800, 600, WEBGL);
    createEasyCam();

    colorMode(HSB);
  


  }
  
  function draw() {
    // orbitControl(1,1,0.1); 
    background(0);
   
    let dt = 0.01;
    let dx = a * (ycord - xcord) * dt;
    let dy = (xcord * (b - zcord) - ycord) * dt;
    let dz = (xcord * ycord - c * zcord) * dt;
    xcord = xcord + dx;
    ycord = ycord + dy;
    zcord = zcord + dz;
  
    points.push(new p5.Vector(xcord, ycord, zcord));
  
    translate(0, 0, -100);
   
    //translate(width/2, height/2);
    scale(5);
    stroke(255);
    noFill();
  
    let hu = 0;
    beginShape();
  
    for (let v of points) {
      vertex(v.x, v.y, v.z);
      //var offset = p5.Vector.random3D();
      //offset.mult(0.1);
      //v.add(offset);
      
      stroke(hu, 255, 255);
      hu += 0.5;
      if (hu > 255) {
        hu = 0;
      }
    }
    endShape();
   
    //println(x,y,z);
  }
