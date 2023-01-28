let div=document.querySelector("div");

let one=setInterval(decrease,1000)

function decrease(){
    div.innerHTML-=1;
    if(div.innerHTML==="9"){
        clearInterval(one);
        window.open("https://elzero.org/","_blank","left=1000,top=100,width=500px,height=500px");
    }
}