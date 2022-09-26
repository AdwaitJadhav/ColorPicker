

function rand(){
    let disp=document.getElementById("display");
    let rand1=Math.floor((Math.random()*255));
    let rand2=Math.floor((Math.random()*255));
    let rand3=Math.floor((Math.random()*255));
    let rand4=Math.random()*1;
    let color="rgba("+rand1+","+rand2+","+rand3+","+rand4+")";
    disp.style.backgroundColor=color;
    let val=document.getElementById("value");
    val.innerHTML=color;
    let hid=document.getElementById("int");
    hid.style.display="none";
}

function red(){
    let disp=document.getElementById("display");
    let rand2=Math.floor((Math.random()*255));
    let rand3=Math.floor((Math.random()*255));
    let rand4=1;
    let rand1=255;
    let color="rgba("+rand1+","+rand2+","+rand3+","+rand4+")";
    disp.style.backgroundColor=color;
    let val=document.getElementById("value");
    val.innerHTML=color;
    let hid=document.getElementById("int");
    hid.style.display="none";
}

function blue(){
    let disp=document.getElementById("display");
    let rand1=Math.floor((Math.random()*255));
    let rand2=Math.floor((Math.random()*255));
    let rand4=1;
    let rand3=255;
    let color="rgba("+rand1+","+rand2+","+rand3+","+rand4+")";
    disp.style.backgroundColor=color;
    let val=document.getElementById("value");
    val.innerHTML=color;
    let hid=document.getElementById("int");
    hid.style.display="none";
}

function green(){
    let disp=document.getElementById("display");
    let rand1=Math.floor((Math.random()*255));
    let rand3=Math.floor((Math.random()*255));
    let rand4=1;
    let rand2=255;
    let color="rgba("+rand1+","+rand2+","+rand3+","+rand4+")";
    disp.style.backgroundColor=color;
    let val=document.getElementById("value");
    val.innerHTML=color;
    let hid=document.getElementById("int");
    hid.style.display="none";
}

/*$(document).ready(function(){
    $("#range").mousedown(function(){
        $("#ranop").slideToggle("fast");
    });
});
*/
function slidedown(){
    let par=document.getElementById("range");
    let li=document.getElementById("ranop");
    if(li.style.display=="none"){
        li.style.transitionProperty="display";
        li.style.transitionDelay="2s";
        li.style.display="block";
    }
    else{
        li.style.transitionProperty="display";
        li.style.transitionDelay="2s";
        li.style.display="none";
    }
}

