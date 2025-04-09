// ***** POVINNÝ Domácí úkol k lekci 10 ***** //
// Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. 
// Budeme jej používat ve všech následujících úlohách.

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

// Vypište do stránky všechna čísla.
const h1 = document.querySelector('.uloha1');
numbers.forEach((hodnota) => {
    h1.innerHTML += ` ${hodnota}, `});

// Vypište do stránky druhé mocniny všech čísel.
const h2 = document.querySelector('.uloha2');
numbers.forEach((hodnota) => {
    h2.innerHTML += ` ${Math.pow(hodnota, 2)}, `}
);

// Vypište do stránky pouze záporná čísla.
const h3 = document.querySelector('.uloha3');
numbers.forEach((hodnota) => {
    if (hodnota < 0) {
    h3.innerHTML += ` ${hodnota}, `}
});

// Vypište do stránky absolutní hodnotu všech čísel.
const h4 = document.querySelector('.uloha4');
numbers.forEach((hodnota) => {
    h4.innerHTML += ` ${Math.abs(hodnota)}, `}
);

// Vypište do stránky pouze sudá čísla.
const h5 = document.querySelector('.uloha5');
numbers.forEach((hodnota) => {
    if (hodnota % 2 === 0) {
        h5.innerHTML += ` ${hodnota}, `
      }
});

// Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
const h6 = document.querySelector('.uloha6');
numbers.forEach((hodnota) => {
    if ((((hodnota)) % 3) ===  0) {
         h6.innerHTML += ` ${Math.abs(hodnota)}, `
    }
});

// Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
const h7 = document.querySelector('.uloha7');
const ciloveCislo = 5;
numbers.forEach((hodnota) => {
    const vzdalenost = Math.abs(hodnota - ciloveCislo);
    h7.innerHTML += ` ${vzdalenost}, `;
  });

// Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
const h8 = document.querySelector('.uloha8');
const ciloveCislo2 = 5;
numbers.forEach((hodnota) => {
    const vzdalenost = Math.abs(hodnota - ciloveCislo2);
    h8.innerHTML += ` ${Math.pow(vzdalenost, 2)}, `;
  });

// Spočítejte, kolik je v seznamu záporných čísel.
const h9 = document.querySelector('.uloha9');
let vysledek = 0;
numbers.forEach((hodnota) => {
    if (hodnota < 0) {
        vysledek = vysledek + 1;
    }
});
h9.innerHTML += ` ${vysledek}`;

// Spočítejte součet všech čísel v poli.
const h10 = document.querySelector('.uloha10');
let soucet = 0;
numbers.forEach((hodnota) => {
    soucet = soucet + hodnota; // můžeme zapsat jako soucet += hodnota; 
});
h10.innerHTML += ` ${soucet}`;

// Spočítejte průměr všech čísel v poli.
const h11 = document.querySelector('.uloha11');
let soucet2 = 0;
let predsoucet = 0;
let vysledek2 = 0;
numbers.forEach((hodnota) => {
    predsoucet = soucet2 + hodnota;
    vysledek2 = predsoucet / numbers.length
});
h11.innerHTML += ` ${vysledek2}`;

// Spočítejte součet všech kladných čísel v poli.
const h12 = document.querySelector('.uloha12');
let soucet3 = 0;
numbers.forEach((hodnota) => {
    if (hodnota >= 1) {
        soucet3 = soucet3 + hodnota;
    }
});
h12.innerHTML += ` ${soucet3}`;
