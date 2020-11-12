// Deklaravimas

const the_age = 99;
console.log(the_age);

const year = 2020;
console.log(year);

const lucky_number = 13;
console.log (lucky_number);

const name1 = "Johny";
console.log(name1);

const city = 'Alabama';
console.log(city);

const airplane = 'Boeing 747';
console.log(airplane);

const marks = [10, 7, 4, 8, 6];
console.log (marks);

const lottery = [13, 7, 24, 2, 49];
console.log (lottery);

const cities = ['New York', 'Los Angeles', 'San Francisco', 'Chicago', 'Denver', 'San Diego', 'Albuquerqe'];
console.log (cities);

const names = ['Chuck', 'Bruce', 'Walter', 'Vercingetorix', 'Julius'];
console.log(names);


// Veiksmai

const sudetis = the_age + year + lucky_number;
console.log(sudetis);

const zodziai = name + " " + city + " " + airplane;
console.log(zodziai);

let marks_math =  0;
marks_math = marks_math + marks[0];
marks_math = marks_math - marks[1];
marks_math = marks_math + marks[2];
marks_math = marks_math - marks[3];
marks_math = marks_math + marks[4]; 
console.log(marks_math);

let lottery_math = 0;
lottery_math = lottery_math + lottery[0];
lottery_math = lottery_math - lottery[1];
lottery_math = lottery_math + lottery[2];
lottery_math = lottery_math - lottery[3];
lottery_math = lottery_math + lottery[4];
console.log(lottery_math);

let all_cities = "";
all_cities = all_cities + cities [0] ;
all_cities = all_cities + ", " + cities [1] ;
all_cities = all_cities + ", " + cities [2] ;
all_cities = all_cities + ", " + cities [3] ;
all_cities = all_cities + ", " + cities [4] ;
all_cities = all_cities + ", " + cities [5] ;
all_cities = all_cities + ", " + cities [6] + ".";
console.log(all_cities);

