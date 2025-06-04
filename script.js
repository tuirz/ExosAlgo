//Niveau 1 - Bases JS
//1
function pairOuImpair(n) {
    if (n % 2 === 0) {
        return "Pair";
    } else {
        return "Impair";
    }
}
//2
function max (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
//3
function tableMultiplication(n) {
    let resultat = [];
    for (let i = 1; i <= 10; i++) {
        resultat.push(n * i);
    }
    return resultat;
}
//4
function sommeJusqua(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}
//5
function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}

//Niveau 2 - Algorithmes
//6
function estPalindrome(chaine) {
    let chaineInverse = chaine.split('').reverse().join('');
    return chaine === chaineInverse;
}
//7
function compterVoyelles(chaine) {
    let voyelles = 'aeiouyAEIOUY';
    let compteur = 0;
    for (let char of chaine) {
        if (voyelles.includes(char)) {
            compteur++;
        }
    }
    return compteur;
}
//8
function inverserChaine(chaine) {
    return chaine.split('').reverse().join(''); 
}
//9
function plusGrand (tab) {
    return Math.max(...tab);
}
//10
function fizzBuzz() {
    let resultat = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultat.push("FizzBuzz");
        } else if (i % 3 === 0) {
            resultat.push("Fizz");
        } else if (i % 5 === 0) {
            resultat.push("Buzz");
        } else {
            resultat.push(i);
        }
    }
    return resultat;
}

console.log('pairOuImpair(4):', pairOuImpair(4));
console.log('pairOuImpair(7):', pairOuImpair(7));
console.log('max(3, 8):', max(3, 8));
console.log('max(10, 2):', max(10, 2));
console.log('tableMultiplication(5):', tableMultiplication(5));
console.log('sommeJusqua(5):', sommeJusqua(5));
console.log('factorielle(5):', factorielle(5));
console.log('estPalindrome("radar"):', estPalindrome("radar"));
console.log('estPalindrome("bonjour"):', estPalindrome("bonjour"));
console.log('compterVoyelles("Bonjour"):', compterVoyelles("Bonjour"));
console.log('inverserChaine("hello"):', inverserChaine("hello"));
console.log('plusGrand([1, 5, 3, 9, 2]):', plusGrand([1, 5, 3, 9, 2]));
console.log('fizzBuzz():', fizzBuzz());

//Série 2
//1
function sommeChiffres(n) {
    let somme = 0;
    while (n > 0) {
        somme += n % 10;
        n = Math.floor(n / 10);
    }
    return somme;
}