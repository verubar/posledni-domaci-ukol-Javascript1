// ***** POVINNÝ Domácí úkol k lekci 10 ***** //
// Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. 
// Budeme jej používat ve všech následujících úlohách.

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

// Vypište do stránky všechna čísla.
// numbers.forEach((hodnota) => {
//      document.body.innerHTML += `${hodnota} <br>`}
// );

// Vypište do stránky druhé mocniny všech čísel.
// numbers.forEach((hodnota) => {
//     if (hodnota >= 0) {
//     document.body.innerHTML += `${Math.sqrt(hodnota)} <br>`}
// });

// Vypište do stránky pouze záporná čísla.
// numbers.forEach((hodnota) => {
//     if (hodnota <= 0) {
//     document.body.innerHTML += `${hodnota} <br>`}
// });

// Vypište do stránky absolutní hodnotu všech čísel.
// numbers.forEach((hodnota) => {
//     document.body.innerHTML += `${Math.abs(hodnota)} <br>`}
// );

// Vypište do stránky pouze sudá čísla.
// numbers.forEach((hodnota) => {
//     if (hodnota % 2 === 0) {
//         document.body.innerHTML += `${hodnota} <br>`
//       }
// });

// Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
// numbers.forEach((hodnota) => {
//     if (((Math.abs(hodnota)) % 3) ===  0) {
//          document.body.innerHTML += `${hodnota} <br>`
//     }
// });

// Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
// const ciloveCislo = 5;
// numbers.forEach((hodnota) => {
//     const vzdalenost = Math.abs(hodnota - ciloveCislo);
//     document.body.innerHTML += `${vzdalenost} <br>`;
//   });

// Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
// const ciloveCislo = 5;
// numbers.forEach((hodnota) => {
//     const vzdalenost = Math.abs(hodnota - ciloveCislo);
//     document.body.innerHTML += `${Math.sqrt(vzdalenost)} <br>`;
//   });

// Spočítejte, kolik je v seznamu záporných čísel.
// let vysledek = 0;
// numbers.forEach((hodnota) => {
//     if (hodnota < 0) {
//         vysledek = vysledek + 1;
//     }
// });
// document.body.innerHTML += `${vysledek}`;

// Spočítejte součet všech čísel v poli.
// let soucet = 0;
// numbers.forEach((hodnota) => {
//     soucet = soucet + hodnota; // můžeme zapsat jako soucet += hodnota; 
// });
// document.body.innerHTML += `${soucet}`;

// Spočítejte průměr všech čísel v poli.
// let soucet = 0;
// numbers.forEach((hodnota) => {
//     predsoucet = soucet + hodnota;
//     vysledek = predsoucet / numbers.length
// });
// document.body.innerHTML += `${vysledek}`;

// Spočítejte součet všech kladných čísel v poli.
// let soucet = 0;
// numbers.forEach((hodnota) => {
//     if (hodnota > 1) {
//         soucet = soucet + hodnota;
//     }
// });
// document.body.innerHTML += `${soucet}`;
