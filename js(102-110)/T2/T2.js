function popup(){
    let div=document.createElement("div");
    let h1=document.createElement("h2");
    let p=document.createElement("p");
    let span=document.createElement("span")

    h1.innerHTML="Welcome";
    p.innerHTML="Welcome In Elzero Web Scool";
    span.innerHTML="X";

    div.append(h1,p,span);
    document.body.append(div)

    div.style.cssText="width: 500px; display: flex; align-items: center; justify-content: center; flex-direction: column; border: 1px solid gainsboro; background: #f5f5f5; position: relative;margin:50px auto"
    span.style.cssText="font-size: 22px; font-family: cursive; position: absolute; right: 0; top: 0; background: darkred; width: 30px; height: 30px; color: white; border-radius: 50%; text-align: center; transform: translate(11px,-11px); cursor: pointer;"

    span.onclick=function(){
        this.parentElement.remove()
    }
}

setTimeout(popup,5000)
