let div=document.querySelector("div");

let one=setInterval(decrease,1000)

function decrease(){
    div.innerHTML-=1;
    if(div.innerHTML==="0"){
        clearInterval(one);
    }
}