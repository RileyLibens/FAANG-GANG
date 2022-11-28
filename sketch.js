var docHeight

function setup() {
  createCanvas(50, 6000);
}

function draw() {
  imageSmoothingEnabled = true;
  background(255,255,255);
  strokeWeight(5);
  stroke(5);
  line(20, 20, 20, window.innerHeight - 20);

  docHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  // This is where you add the IDs of the elements
  // you wish to connect

  
  var top = (window.pageYOffset || document.documentElement.scrollTop)  -     (document.documentElement.clientTop || 0);
  
  var bottom = top+window.innerHeight;
  
  
  
  let mapTop = map(top, 0, docHeight, 20, window.innerHeight-20)
  let mapBottom = map(bottom, 0, docHeight, 20, window.innerHeight-20)
  
  // ellipse(20,mapTop,20,20);
  // ellipse(20,mapBottom,20,20);

  fill(100);
  rect(18.5,mapTop,3,mapBottom-mapTop);
  
  highlight("Fact 1", top,bottom);
  highlight("Graphs", top,bottom);
  highlight("Fact 3", top,bottom);
  highlight("Fact 2", top,bottom);
    
  createLink("Fact 1");
  createLink("Graphs");
  createLink("Fact 3");
  createLink("Fact 2");
  

  
}

function getPos(el) {
  // yay readability
  for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return {
    x: lx,
    y: ly,
  }

}

function createLink(divElement) {

  let segPos = getPos(document.getElementById(divElement));
  let scrollLocSeg = ((segPos.y / docHeight) * window.innerHeight - 40 + 20);
  
  fill(0,0,0);
    noStroke();
  rectMode(CENTER);
  rect(20,scrollLocSeg+20,6,textWidth(divElement)+15);
  rectMode(CORNER);
  
    if (dist(mouseX,mouseY,20,scrollLocSeg+20)<40){
    console.log("mouse is over");
  fill(0,0,0);
    noStroke();
  rectMode(CENTER);
  rect(20,scrollLocSeg+20,6,textWidth(divElement)+15);
  rectMode(CORNER);
      
  // cursor = "pointer";
  }
  
  push();
  translate(23, scrollLocSeg + 20);
  
  rotate(-PI / 2);
  noStroke();
  fill(255);
  textAlign(CENTER);
  text(divElement, 0, 0);
  pop();
  stroke(255);
  line(20+10, scrollLocSeg + 20, segPos.x, segPos.y - window.scrollY);
  

  
}


function highlight(divElement, t,b){

  let segPos = getPos(document.getElementById(divElement));
  let scrollLocSeg = ((segPos.y / docHeight) * window.innerHeight - 40 + 20);
  
  var divRect = document.getElementById(divElement).getBoundingClientRect();
  var height = divRect.height;
  
  // console.log(divRect.height);
  
  if (segPos.y<=b && segPos.y+divRect.height>=t){
    rectMode(CENTER);
    rect(20,scrollLocSeg+20,10,textWidth(divElement)+25);
    rectMode(CORNER);
    
  function mouseClicked(){
    
    document.documentElement.scrollTop = 0;
    // console.log("is in view");
    
  }
  }
  
}

//////

class internalLink {
  
  constructor() {
    this.x;
    this.y;
    this.name;
  }
  
  highlight2(divElement,t,b){
    
     let segPos = getPos(document.getElementById(divElement));
  let scrollLocSeg = ((segPos.y / docHeight) * window.innerHeight - 40 + 20);
  
  var divRect = document.getElementById(divElement).getBoundingClientRect();
  var height = divRect.height;
  
  // console.log(divRect.height);
  
  if (segPos.y<=b && segPos.y+divRect.height>=t){
   rectMode(CENTER);
    rect(20,scrollLocSeg+20,10,textWidth(divElement)+25);
  rectMode(CORNER);
    
  }
    
  }
    
    
  createLink2(divElement) {

  let segPos = getPos(document.getElementById(divElement));
  let scrollLocSeg = ((segPos.y / docHeight) * window.innerHeight - 40 + 20);
  
  fill(0,0,255);
    noStroke();
  rectMode(CENTER);
  rect(20,scrollLocSeg+20,6,textWidth(divElement)+15);
  rectMode(CORNER);
  
  push();
  translate(23, scrollLocSeg + 20);
  
  rotate(-PI / 2);
  noStroke();
  fill(255);
  textAlign(CENTER);
  text(divElement, 0, 0);
  pop();
  stroke(255);
  line(20+10, scrollLocSeg + 20, segPos.x, segPos.y - window.scrollY);
  
}
    
  
}