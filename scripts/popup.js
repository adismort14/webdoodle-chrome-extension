let cnt=0;

var toggle=document.getElementById("toggleButton").addEventListener('click',function(){
    if(cnt==0){
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { action: 'generate' });
        });
        document.getElementById('toggleButton').innerHTML="Clicked";
        cnt++;
    }
    // else{
    //     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //         const activeTab = tabs[0];
    //         chrome.tabs.sendMessage(activeTab.id, { action: 'clear' });
    //     });
    //     document.getElementById('toggleButton').innerHTML="Doodle Away";
    //     cnt=0;
    // } 
},false);

var penColors=document.getElementsByClassName("buttonStyle");

for(const penColor of penColors){
    penColor.addEventListener('click',function(){
        // console.log(penColor.innerHTML);
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { data: penColor.innerHTML });
        });
    })
}

