'use strict';
//VAR 0 - print value from to with method setInterval
function printNumbers0(from, to) {
    let x = from;
    return function () {
        if (x <= to) {
        console.log ('var0= ', x);
        return x++;
    }
        else {clearInterval (timerId)};
    }  
}
let timerId = setInterval(printNumbers0(-1, 1), 1000);

//VAR 1 - print value from to with method setInterval
setTimeout(() => {
let printNumbers1 = (from, to) => {
    let x = from;
    let timerId = setInterval(() => {
        if ( x <= to) {
            console.log('var1= ', x);
            x++;
        }
        else (clearInterval (timerId));
    }, 1000);
}
printNumbers1(2, 4);
}, 3000);

//VAR 2 - print value from to with recursive method setTimeout
setTimeout(() => {
    let printNumbers2 = (from, to) => {
        let x = from;
        setTimeout (function nextNumber () {
            console.log('var2= ', x);
            if (x < to) {
                setTimeout(nextNumber, 1000);
            }
            x++;
        })
    }
    printNumbers2 (5, 7);
}, 7000);

//clock in console
setTimeout(() => {
    function clock () {
    console.clear();
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    function addZero(x) {
        if(x < 10){
        return x = `0${x}`;
        }
        return x;
    }

    console.log (`${h}:${m}:${s}`)
}
setInterval(clock, 1000);
}, 10000);
