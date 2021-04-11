const name1 = 'John';
const name2 = 'Steve';
const name3 = 'Maria';

function sayHi(vardas){
    return `Hi, ${vardas}!`;
}
const hi1 = sayHi(name1);
console.log(hi1);

console.log('.........................................................');

const marks1 = [10, 2, 8, 4, 6];
const marks2 = [9, 1, 7, 3];
const marks3 = [10, 9, 8];

function average(pazymiai) {
    let suma = 0;
    const kiekis = pazymiai.length;

    for (let i = 0; i < kiekis; i++) {
        const pazymys = pazymiai[i];
        suma = suma + pazymys;
    }

    return suma / kiekis;
}

const ave1 = average(marks1);
console.log(ave1);

const ave2 = average(marks2);
console.log(ave2);

const ave3 = average(marks3);
console.log(ave3);
