console.log("content script is running.");

function setup(){
    // console.log("this is setup");
    let c=createCanvas(windowWidth, windowHeight);
    c.position(0,0);
    c.style('pointer-events','none');
    clear();
}

function draw(){
    // console.log("this is loop fun");
    stroke(0);
    strokeWeight(4);
    // background(0);
    // if(isMousePressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    // }

}