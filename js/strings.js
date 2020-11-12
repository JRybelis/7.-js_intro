const vardas2 = "Vardenis";
const pasisveikinimas = ""
console.log(vardas);

// Mother said: "Don't do it!"
const mother1 = "Mother said: \"Don't do it!\".";
const mother2 = 'Mother said: "Don\'t do it!".';
console.log(mother1);
console.log(mother2);

// <div> 
    // <p> Lorem ipsum </p>
    // <a href="#"> Click me</a>
    // <div>

const html = `<div>
    <p> Lorem ipsum </p>
    <a> href="#"> Click me </a>
    </div>`;
console.log(html);

// Joniukas ir Grytutė ėjo į mišką.
const berniukas = 'Joniukas';
const mergaite = 'Gretutė';
const judejimas = 'ejo';
const vieta = 'mišką';
// const pasaka = berniukas + ' ir ' + mergaite + ' ' + judejimas + ' į ' + 'vieta' + '.';
// console.log(pasaka);
// arba
const pasaka = `${berniukas} ir ${mergaite} ${judejimas} į ${vieta}.`;
console.log (pasaka);