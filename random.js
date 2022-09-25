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
