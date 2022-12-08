class Hamster {
    
    constructor(name = 'vaishali',owner="", price = 15) {
        this.name = name;
        this.owner= owner;
        this.price = price;
    } 
    wheelRun() {
        return ("squeak squeak");
    }
    
    eatFood() {
        return ("nibble nibble");
    }
    
    getPrice() {
        return this.price;
    } 
    
}

const hamster = new Hamster('vishwa');
console.log(hamster.wheelRun());
console.log(hamster.eatFood());
console.log(hamster.getPrice());


class Person{

    constructor(name='vaishali', age=0, height=0, weight=0, mood=0, hamsters= [], bankAccount=0) {
        
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    greet() {
        return (`Hello ${this.name}`);
    }

    eat() {
        return `${this.weight++}, ${this.mood++}`;
    }

    exercise () {
        return this.weight--;
    }

    ageUP() {
        return  `${this.age++},
                ${this.height++},
                ${this.weight++},
                ${this.mood--},
                ${this.bankAccount += 10}`;
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster);
        const array = this.getAllHamsters(this.hamsters)
        this.mood += 10;
        console.log(hamster.getPrice());
        this.bankAccount -= hamster.getPrice();
        return `${this.name} has bought ${hamster.name} for ${hamster.getPrice()} and is now ${this.mood}`
        
    }
    
    getAllHamsters(hamsters) {
        let array = [] 
        hamsters.forEach(hamster => {
            array.push(hamster.name)    
        });
        return array;
    }
}
const per1 = new Person();
console.log(per1.greet());

//Instantiate a new Person named Timmy
const Timmy = new Person('Timmy');
console.log(Timmy);
//Age Timmy five years
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
console.log(Timmy);
//Timmy eat five times
Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.eat();
console.log(Timmy,'Timmys details at the time when he is eating 5 times');
//Timmy exercise five times
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
console.log(Timmy, 'Timmys details when his exercise 5 times');
//Age Timmy 9 years
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
console.log(Timmy, 'Timmys details when timmmys age 9 year up' );
//Create hamster named "Gus"
const Gus = new Hamster('Gus');
console.log(Gus);
//Set Gus's owner to the string "Timmy"
Gus.owner = "Timmy";
console.log(Gus);
//Have Timmy "buy" Gus
console.log(Timmy.buyHamster(Gus));
console.log(Timmy);
//Age Timmy 15 years
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
Timmy.ageUP();
console.log(Timmy, 'Timmys details when timmys age 15 years up');
//Have Timmy eat twice
Timmy.eat();
Timmy.eat();
console.log(Timmy, 'Timmys details when eat twice');
//Have Timmy exercise twice
Timmy.exercise();
Timmy.exercise();
console.log(Timmy,'Timmys details when exercise twice');

class Dinner {

    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef extends Dinner {

    order(item1, item2, item3) {
        const din = new Dinner(item1, item2, item3);
        return din;

    }
}

const dinone = new Chef();
console.log(dinone.order('soup', 'paneer', 'icecream'));

const dintwo = new Chef();
console.log(dintwo.order('salad', 'pasta', 'cake'));

const dinthree = new Chef();
console.log(dinthree.order('springroll', 'noodles', 'milkshake'));