//test1 class

// we use class for dynamic object

/*
let student = {
name: 'Yoon',
age: '25',
subject: 'Javascript'
}

//becasue we donot want ot make let student above a million times 
//so we use class insted like below

class Students {
constructor(name, age, subject) {
this.name = name;
this.age = age;
this.subject = subject;
}
}

let lolo = new Students('Lolo', 25, 'Javascript');

console.log(lolo)
*/

//https://www.tensorflow.org/js

// test 2- phototype
function petShop(age2, color2, type2){
    this.age = age2;
    this.color = color2
    this.type = type2
}
let petOne = new petShop(1,"black","cat")
// console.log(petOne)


//

function kitchenStore(price2, color2,type3){
    this.price = price2;
    this.color = color2;
    this.type = type3;
}
let kitchenOne = new kitchenStore(20, "red","indoor cooking")
console.log(kitchenOne)
