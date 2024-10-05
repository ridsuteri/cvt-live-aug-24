let container = document.querySelector('.number-container');
let btn = document.querySelector('.btn');
container.innerHTML = '0000';


function genRandomNumber (){
    let n = Math.floor(Math.random()*10000);
    n = n.toString()
    let numberLength = n.length;
    if(numberLength < 4){
        for(var i = numberLength; i < 4; i++ ){
            n = `0${n}`
        }
    }
    return n
}

function showRandomNumber(){
    let number = genRandomNumber();
    container.innerHTML = number;
}

btn.addEventListener('click', showRandomNumber)
