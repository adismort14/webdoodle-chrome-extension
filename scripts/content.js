// console.log("content script is running.");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action==='generate') {
        var s = p => {
            p.setup=function(){
                    document.body.style['userSelect']='none';
                    let h=document.body.clientHeight;
                    let c=p.createCanvas(p.windowWidth, h);
                    c.position(0,0);
                    c.style('pointer-events','none');
                    p.clear();
                }
                
                p.draw=function(){
                    p.stroke(0);
                    p.strokeWeight(4);
                    if(p.mouseIsPressed){
                        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
                    }
                }
            
            };
            new p5(s);
        }

        if(message.data==='Red'){
            // console.log('Red');
            var s = p => {
                p.setup=function(){
                        document.body.style['userSelect']='none';
                        let h=document.body.clientHeight;
                        let c=p.createCanvas(p.windowWidth, h);
                        c.position(0,0);
                        c.style('pointer-events','none');
                        p.clear();
                    }
                    
                    p.draw=function(){
                        p.stroke(255,0,0);
                        p.strokeWeight(4);
                        if(p.mouseIsPressed){
                            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
                        }
                    }
                
                };
                new p5(s);
           
        }
        else if(message.data==='Blue'){
            var s = p => {
                p.setup=function(){
                        document.body.style['userSelect']='none';
                        let h=document.body.clientHeight;
                        let c=p.createCanvas(p.windowWidth, h);
                        c.position(0,0);
                        c.style('pointer-events','none');
                        p.clear();
                    }
                    
                    p.draw=function(){
                        p.stroke(0,0,255);
                        p.strokeWeight(4);
                        if(p.mouseIsPressed){
                            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
                        }
                    }
                
                };
                new p5(s);
            
        }
        else if(message.data==='Black'){
            var s = p => {
                p.setup=function(){
                        document.body.style['userSelect']='none';
                        let h=document.body.clientHeight;
                        let c=p.createCanvas(p.windowWidth, h);
                        c.position(0,0);
                        c.style('pointer-events','none');
                        p.clear();
                    }
                    
                    p.draw=function(){
                        p.stroke(0);
                        p.strokeWeight(4);
                        if(p.mouseIsPressed){
                            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
                        }
                    }
                
                };
                new p5(s);
            
        }
    }
  );

  



