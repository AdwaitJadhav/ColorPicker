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
    let hex=document.getElementById("hex");
    if(li.style.display=="none"){
        li.style.display="block";
        li.style.visibility="visible";
        hex.style.display="none";
    }
    else{
        
        li.style.display="none";
        li.style.visibility="hidden";
        hex.style.display="inline-block";
    }
}

function input(){
    let inp1=document.getElementById('red1').value;
    let inp2=document.getElementById('green1').value;
    let inp3=document.getElementById('blue1').value;
    let inp4=document.getElementById('op1').value;
    let disp=document.getElementById("display");
    let val=document.getElementById("value");
    let hid=document.getElementById("int");
    if(inp1==""){
        inp1=0;
    }
    if(inp2==""){
        inp2=0;
    }
    if(inp3==""){
        inp3=0;
    }
    if(inp4==""){
        inp4=1;
    }
    let color="rgba("+inp1+","+inp2+","+inp3+","+inp4+")";
    disp.style.backgroundColor=color;
    val.innerHTML=color;
    hid.style.display="none";

}

