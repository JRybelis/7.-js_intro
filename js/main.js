// sveikojo skaičiaus atvaizdavimas: 
console.log(200004);

// du skaitmenys atvaizduojami su kableliu. dešimtainis skaičius atvaizduojamas su tašku.
console.log(3,14);
console.log(3.14);

// tekstas atvaizduojamas su dvigubomis arba viengubomis kabutėmis.
console.log("Dvigubos kabutės");
console.log('Viengubos kabutės');

// Iniciavimo būdai:
// const - default pasirinkimas
// let - galima naudoti, tik jei yra reikalas keisti reikšmę, down the line
// var - nenaudotinas kol kas
//_____________________________________________
// Kintamieji
// _____________________________________________
//  kintamųjų tipai (pagal reikšmes):
// number
// string
//  boolean (loginiai) - true, false
// array (sąrašai) -[]
// object - {}


const pirmas_skaicius = 2;
const antras_skaicius = 3;

console.log(pirmas_skaicius);
console.log(antras_skaicius);

const suma = pirmas_skaicius + antras_skaicius;
console.log(suma);
console.log(pirmas_skaicius, '+', antras_skaicius, '=', suma);

const vardas = 'Vardenis';
const amzius = 99;
console.log(vardas);
console.log(amzius);

// Vardenis yra 99 metų amžiaus. 
// ________ yra ___ metų amžiaus. 

const sakinys = vardas + ' yra ' + amzius + '-erių metų amžiaus.';
console.log(sakinys);

const suo = 'Rikis';
const maistas = 'kaulas';
// Rikis mėgsta, kai jam paduodamas kaulas. 
const suns_hobis = suo + ' mėgsta, kai jam paduodamas ' + maistas + '.'
console.log(suns_hobis);

const hero_name = "Chuck";
const hero_last_name = "Norris";
const YOB = 1940;
// Chuck Norris (80)
const current_year = 2020;
const age = current_year - YOB;
const amziaus_apskaiciavimas = hero_name + " " + hero_last_name + " (" + age + ")";
console.log(amziaus_apskaiciavimas); 


let pinigine = 0;
const sausis = 100;
const vasaris = 200;
const kovas = 70;

pinigine = pinigine + sausis;
console.log(pinigine);

pinigine = pinigine + vasaris;
console.log(pinigine);

pinigine = pinigine + kovas;
console.log(pinigine);

