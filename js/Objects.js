function Phone(isSmart, length, width, height) {
    this.isSmart = isSmart;
    this.length = length;
    this.width = width;
    this.height = height;
}

const nokia =  new Phone(false, 80, 10, 5);
const iphone =  new Phone(true, 10, 30, 30);
const samsung =  new Phone(true, 10, 40, 40);
const huawei =  new Phone(true, 10, 40, 40);
const lg =  new Phone(true, 15, 30, 30);
const xiaomi =  new Phone(true, 10, 40, 40);

function Person(gender, age, width, height, hairColor, name, adress) {
    this.gender = gender;
    this.age = age;
    this.width = width;
    this.height = height;
    this.hairColor = hairColor;
    this.name = name;
    this.adress = adress;

    this.describe = () => {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old. My height is " + this.height +
        " and my hair color is " + this.hairColor + ".");    
    }
    this.canDrive = () => {
        return this.age >= 16;
    }
    this.isAdult = () => {
        if (this.gender == "male") {
            return this.age >= 13;
        } else {
            return this.age >= 12;
        }
    }
    this.changeHairColor = (hairColor) => {
        this.hairColor = hairColor;
    }
    this.lowerCaseName = (name) => {
        this.name = name.toLowerCase();
    }
}   

const Ben = new Person("male", 13, 50, 155, "black", "Ben", "Israel, Kfar Yona, Turmus/Hacalanit, 43/32");
const Almog = new Person("female", 13, 50, 154, "light-brown", "Almog", "Israel, Kfar Yona, Turmus/Hacalanit, 43/32");
const Yael = new Person("female", 43, 70, 170, "brown", "Yael", "Israel, Kfar Yona, Turmus, 43");
const Sagiv = new Person("male", 45, 90, 175, "black", "Sagiv", "Israel, Kfar Yona, Hacalanit, 32");
const Roee = new Person("male", 11, 60, 165, "black", "Roee", "Israel, ___, ___/___, ___/___");