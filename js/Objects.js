function Phone(isSmart, length, width, height) {
    this.isSmart = isSmart;
    this.length = length;
    this.width = width;
    this.height = height;
}

const nokia =  new Phone(false, 80, 10, 5);
const iphone =  new Phone(true, 80, 10, 5);
const samsung =  new Phone(true, 80, 10, 5);
const huawei =  new Phone(true, 80, 10, 5);
const lg =  new Phone(true, 80, 10, 5);
const xiaomi =  new Phone(true, 80, 10, 5);

function Person(gender, age, width, height, hairColor) {
    this.gender = gender;
    this.age = age;
    this.width = width;
    this.height = height;
    this.hairColor = hairColor;
}

const Ben = Person(male, 13, 50, 155, black)
const Almog = Person(female, 13, 50, 154, light-brown)
const Yael = Person(male, 43, 70, 170, brown)
const Ben = Person(male, 45, 90, 175, black)
const Roee = Person(male, 11, 60, 165, black)