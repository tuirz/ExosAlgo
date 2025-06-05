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
  return String(n).split('').reduce((somme, chiffre) => somme + Number(chiffre), 0);
}

//2
function compterParPas(n, pas) {
    let resultat = [];
    for (let i = 0; i <= n; i += pas) {
        resultat.push(i);
    }
    return resultat;
}
//3
function verifierSigne(nombre) {
    if (nombre > 0) {
        return "Positif";
    } else if (nombre < 0) {
        return "Négatif";
    } else {
        return "Zéro";
    }
}
//4
function afficherLettres(mot, position) {
    for (let lettre of mot) {
        console.log(lettre);
    }
}
//5
function carre(n) {
    return n * n;
}
//6
function compteurLettre(mot) {
    const motMinuscule = mot.toLowerCase();
    let compteur = {};
    for (let lettre of motMinuscule) {
        if (compteur[lettre]) {
            compteur[lettre]++;
        } else {
            compteur[lettre] = 1;
        }
    }
    return compteur;
}
//7
function sommeTableau(tab) {
    return tab.reduce((somme, nombre) => somme + nombre, 0);
}
//8
function filtrerPairs(tab) {
    return tab.filter(nombre => nombre % 2 === 0);
}
//9
function remplacerLettres(mot, lettre, nouvelleLettre) {
    return mot.split(lettre).join(nouvelleLettre);
}
//10
function fusionnerTableaux(tab1, tab2) {
    return [...tab1, ...tab2];
}
//11
function guessNumber(guess, secret) {
       const random = Math.floor(Math.random() * 10) + 1;
       while (guess !== secret) {
           if (guess < secret) {
               console.log("Plus grand !");
           } else if (guess > secret) {
               console.log("Plus petit !");
           }
           guess = Math.floor(Math.random() * 10) + 1;
         }
       console.log("Bravo ! Vous avez trouvé le nombre !");
       return random;
}
//12
function trierTableau(tab) {
    for (let i = 0; i < tab.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < tab.length; j++) {
            if (tab[j] < tab[minIndex]) {
                minIndex = j;
            }
        }
        [tab[i], tab[minIndex]] = [tab[minIndex], tab[i]];
    }
    return tab;
}
//13
function convertirTemps(min) {
    const heures = Math.floor(min / 60);
    const minutes = min % 60;
    return `${heures} heure(s) et ${minutes} minute(s)`;
}
//14
function sontAnagrammes(mot1, mot2) {
    const normalize = (mot) => mot.toLowerCase().split('').sort().join('');
    return normalize(mot1) === normalize(mot2);
}
//15
function convertisseurCelsiusFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log('sommeChiffres(1234):', sommeChiffres(1234));
console.log('compterParPas(10, 2):', compterParPas(10, 2));
console.log('verifierSigne(5):', verifierSigne(5));
console.log('verifierSigne(-3):', verifierSigne(-3));
console.log('verifierSigne(0):', verifierSigne(0));
console.log('carre(6):', carre(6));
console.log('compteurLettre("Abracadabra"):', compteurLettre("Abracadabra"));
console.log('sommeTableau([4, 5, 6]):', sommeTableau([4, 5, 6]));
console.log('filtrerPairs([1, 2, 3, 4, 5, 6]):', filtrerPairs([1, 2, 3, 4, 5, 6]));
console.log('remplacerLettres("banane", "a", "o"):', remplacerLettres("banane", "a", "o"));
console.log('fusionnerTableaux([1,2], [3,4]):', fusionnerTableaux([1,2], [3,4]));
console.log('trierTableau([5, 2, 9, 1]):', trierTableau([5, 2, 9, 1]));
console.log('convertirTemps(135):', convertirTemps(135));
console.log('sontAnagrammes("chien", "niche"):', sontAnagrammes("chien", "niche"));
console.log('sontAnagrammes("chien", "chat"):', sontAnagrammes("chien", "chat"));
console.log('convertisseurCelsiusFahrenheit(0):', convertisseurCelsiusFahrenheit(0));
console.log('convertisseurCelsiusFahrenheit(100):', convertisseurCelsiusFahrenheit(100));