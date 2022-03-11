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
    // for (var i = 0; i < 6; i++) {
    //     if (i === 2) {
    //       sliderGroup[i] = createSlider(10, 400, 200);
    //     } else {
          
    //       sliderGroup[i] = createSlider(-400, 400, 0);
    //     }
    //     h = map(i, 0, 6, 5, 85);
    //     sliderGroup[i].position(10, height + h);
    //     sliderGroup[i].style('width', '80px');
    //   }


  }
  
  function draw() {
    // orbitControl(1,1,0.1); 
    background(0);
    // X = sliderGroup[0].value();
    // Y = sliderGroup[1].value();
    // Z = sliderGroup[2].value();
    // centerX = sliderGroup[3].value();
    // centerY = sliderGroup[4].value();
    // centerZ = sliderGroup[5].value();
    // camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
   
    let dt = 0.01;
    let dx = a * (ycord - xcord) * dt;
    let dy = (xcord * (b - zcord) - ycord) * dt;
    let dz = (xcord * ycord - c * zcord) * dt;
    xcord = xcord + dx;
    ycord = ycord + dy;
    zcord = zcord + dz;
  
    points.push(new p5.Vector(xcord, ycord, zcord));
  
    translate(0, 0, -100);
    // let camX = map(mouseX, 0, width, -200, 200);
    // let camY = map(mouseY, 0, height, -200, 200);
    // camera(camX, camY, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0);
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