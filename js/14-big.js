function didziausiasSkaiciusSarase(number) {
    if (!Array.isArray(number)) {
        return 'ERROR: Pateikta netinkamo tipo reiksme';
    }

    if (number.length === 0) {
        return 'ERROR: Pateiktas sarasas negali buti tuscias';
    }

    let largest = -Infinity; 
        for (let i = 0; i < number.length; i++) { 
        if (largest < number[i]) {largest = number[i]; 
        } 
    }
        return largest;


}

console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );
