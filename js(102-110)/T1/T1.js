let numbers=window.prompt("Write two numbers and put - sign between them");

numbers =numbers.split("-");

let min=Math.min(numbers[0],numbers[1]);
let max=Math.max(numbers[0],numbers[1]);

console.log(min)
function Info(){
    let increment=++min;
    if(increment <= max){
        console.log(increment);
    }
}
setInterval(Info,1000);