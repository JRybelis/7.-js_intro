const account_balance = 100;
const transfer = 200; 

if(account_balance >= transfer) {
    console.log("Banko žinutė: pavedimas padarytas.");
} else {
    console.log("Banko žinutė: sąskaitoje trūksta pinigų.");
}

const akys = "raudonos";
if (akys == 'mėlynos') {
    console.log('Gražios širdies žmogus');
} else 
    if (akys == 'žalios') {
    console.log('Melagis');
    } else 
        if (akys == 'raudonos') {
        console.log('Programuotojas');
        } else {
            console.log('Kerinčios rudos akys');
            }
