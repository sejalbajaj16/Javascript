let score = 33;
console.log(typeof score); //number
console.log(typeof (score));//number

let score1 = "33";
console.log(typeof score1);//string
console.log(typeof (score1));//string

let valueInNumber = Number(score1);
console.log(typeof valueInNumber);//string

let score2 = "33abc";
valueInNumber = Number(score2);
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NaN




