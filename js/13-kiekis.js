  
function skaitmenuKiekisSkaiciuje(alone) {
    if (typeof alone !== 'number') {
        return 'ERROR: Pateikta netinkamo tipo reiksme';
    }

    if (!isFinite(alone)) {
        return 'ERROR: Pateikta netinkamo tipo reiksme';
    }

    let kiekis = (alone + '').length;

    if (alone % 1 !== 0) {
        kiekis--;
    }

    if (alone < 0) {
        kiekis--;
    }

    return kiekis;
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(-37060123456));

