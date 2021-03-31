/*
KINTAMUJU INICIAVIMO DARBAI
const - 
let - 
var - 
KINTAMUJU TIPAI:
tekstas - (string) - 
*/

const name = 'Petras';
console.log(name);

const lastName = 'Pavardenis'
console.log(lastName);

let balance = 99;
console.log(balance);

var curency = 'eur';
console.log(curency);

balance = 999;
balance = 10;
balance = -10;
balance = 0;
console.log(balance);

const skaicius1 = 5;
console.log(skaicius1);

const skaicius2 = 7.46;
console.log(skaicius2);

const skaicius3 = -84.3;
console.log(skaicius3);

const pazymiai = [10, 2, 8, 6, 4];
console.log(pazymiai);

const studentai = ['Petriukas', 'Maryte', 'Jonas'];
console.log(studentai);
console.log(studentai[1] + ', ' + studentai[2]);

if (balance <= 0) {
    console.log('pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

console.log(studentai[0].replace('P', 'V'));
const a = 1;
let b = a + 1;
if (studentai.length == a + 1) {
    b = 0;
}
if (studentai[a].length < studentai[b].length) {
    console.log(studentai[a] + ' yra trumpesnis už ' + studentai[b]);
} else {
    console.log(studentai[a] + ' yra ilgesnis už ' + studentai[b]);
}