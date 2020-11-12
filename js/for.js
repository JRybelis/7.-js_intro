// const kiek = 7;
// for(let i=3; i<=kiek; i++) {
// console.log('Labas rytas!', i);
// }

// Jei kas mėnesį uždarbis $5000.00, tai kiek jis turi pajamų per metus?
const alga = 5000;
const mėnesių = 12;
let pajamos = 0;

for(let i = 1; i <= mėnesių; i++) {
   pajamos = alga*i
   console.log(`${i} mėnesis) ${pajamos} pinigų`); 
    }

// Nurodyti ciferblato valandas. 

const valanda = 4;
const max_valandų = 12;
for (let val = valanda; val <= max_valandų; val++) {
    console.log(val);
}

// išvardyti kiekvieną aplankytą miestą iš sąrašo. Spausdiname: "Aplankiau: miesto pavadinimas."
const citiez = ['New York', 'Los Angeles', 'San Francisco', 'Chicago', 'Denver', 'San Diego', 'Albuquerqe'];

 for (let i=0; i<citiez.length; i++) {
    console.log(`Aplankiau ${citiez [i]}.`);
 }
console.log ('.....................................');

//  Išvardinti sąrašo narius iš galo.
const abc = ["a","b","c","d","e","f","g",];
for (let pozicija=abc.length-1; pozicija >=0; pozicija--) {
    console.log(abc[pozicija]);
}

console.clear();

const text = "Ottoman";
for (let i=0; i<text.length; i++) {
    console.log(text[i]);
}

console.log ('.....................................');

// Duodamas žodis ir iš jo reikia išrinkti kas antrą raidę ir išspausdinti, gaunamas.
const step = 2;
const position_first_letter = step-1;
let answer = "";
for (let i=position_first_letter; i<text.length; i = i + step) {
    const letter = text[i];
    answer = answer + letter;
    }
console.log(answer);
