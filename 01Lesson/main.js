'use strict'
 let arr = [1,-8,12];

 //set variable use destructuring assigment
 const [a,b,c] = arr;

const firstSign = (a<0) ? '-' : '';
const secondSign = (b<0) ? ' - ' : (b==0) ? '' : ' + ';
const therdSign = (c<0) ? ' - ' : (c==0) ? '' : ' + ';
const aPrint = (a === 1 || a === -1) ? '' : Math.abs(a);
const secondElem = (b === 0) ? '' : `${Math.abs(b)}x`;
const therdElem = (c === 0) ? '' : Math.abs(c);

//finding diskriminant use arrow function
 const findDiskriminant = () => Math.pow(b,2)-4*a*c; 

 const diskriminant = findDiskriminant()

 // show results use backtiks and multi-line strings
 if (diskriminant < 0) {
     console.log(`${firstSign}${aPrint}x^2${secondSign}${secondElem}${therdSign}${therdElem}
Дискриминант = ${diskriminant}
Корней нет`);
 } else if (diskriminant === 0) {
    const x1 = (-b+Math.sqrt(diskriminant))/2*a;
    console.log(`${firstSign}${aPrint}x^2${secondSign}${secondElem}${therdSign}${therdElem}
Дискриминант = ${diskriminant}
x = ${x1}`);
 } else {
    const x1 = (-b+Math.sqrt(diskriminant))/2*a;
    const x2 = (-b-Math.sqrt(diskriminant))/2*a;
    console.log(`${firstSign}${aPrint}x^2${secondSign}${secondElem}${therdSign}${therdElem}
Дискриминант = ${diskriminant}
x1 = ${x1}
x2 = ${x2}`);
}