function isrinktiRaides(tekstas, raide) {

    if (typeof tekstas !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }

    if (tekstas.length === 0) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.'
    }

    if (tekstas.length >= 100) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.'
    }

    if (typeof raide !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    
    if (tekstas.length < raide) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.'
    }

    }

console.log( isrinktiRaides( 'abcdefg', 2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );