function daugyba(pirmasSkaicius, antrasSkaicius) {
    //input validation
    
if (typeof pirmasSkaicius !== 'number') {
    return 'ERROR: pirma reiksme turi buti skaiciaus tipo';
}

if (pirmasSkaicius === Infinity || pirmasSkaicius === -Infinity) {
    return 'ERROR: pirmasis skaicius negali buti begalybe';
}

if (antrasSkaicius === Infinity || antrasSkaicius === -Infinity) {
    return 'ERROR: antrasis skaicius negali buti begalybe';
}

if (isNaN(pirmasSkaicius)) {
    return 'ERROR: pirmasis skaicius negali buti NaN';
}

if (' ' + pirmasSkaicius === 'NaN') {
    return 'ERROR: pirmasis skaicius negali buti NaN';}   // geriausias

if (pirmasSkaicius.toString() === 'NaN') {
        return 'ERROR: pirmasis skaicius negali buti NaN';
    }

if (!isFinite(pirmasSkaicius)) { // === false
        return `ERROR: pirmasis skaicius negali buti ${pirmasSkaicius}`; // paraso infinity ir minus infinity ir NaNus
}


    // logic
    const rezultatas = pirmasSkaicius * antrasSkaicius;

    //return result
    return rezultatas; 
}

console.log(daugyba(5, 6), '->', 30);

console.log(daugyba(1.5, Infinity));
console.log(daugyba(Infinity, 5));

console.log(daugyba(NaN, NaN));