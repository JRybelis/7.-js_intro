/*
Sąrašo tipo kintamieji.
sinonimai: sąrašas, masyvas, array, matrica*
inicijuojama su laužtiniais skliaustais;
viduje gali būti įvairių tipų reikšmių, bet rekomenduotina, kad būtų tik vieno tipo reikšmės.
*/

// Pažymiai:
// Petriuko_pazymiai = 2, 10, 7, 5, 2, 9, 7;
const Petriuko_pazymiai = [2, 10, 7, 5, 2, 9, 7];
console.log (Petriuko_pazymiai);

let sumarum = 0;
sumarum = suma + Petriuko_pazymiai [0];
sumarum = sumarum + Petriuko_pazymiai [1];
sumarum = sumarum + Petriuko_pazymiai [2];
sumarum = sumarum + Petriuko_pazymiai [3];
sumarum = sumarum + Petriuko_pazymiai [4];
sumarum = sumarum + Petriuko_pazymiai [5];
sumarum = sumarum + Petriuko_pazymiai [6];
sumarum = sumarum + Petriuko_pazymiai [7];
const kiekis = Petriuko_pazymiai.length; 
const vidurkis = suma/kiekis;
console.log(vidurkis);

const miestai = ['Vilnius', 'Kaunas', 'Klaipėda', 'Anykščiai'];
console.log(miestai [3]);
console.log(miestai [1]);
console.log(miestai [2]);
console.log(miestai [0]);

