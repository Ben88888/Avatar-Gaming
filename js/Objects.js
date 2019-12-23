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

function Address(country, city, street, addressNumber) {
    this.country = country;
    this.city = city;
    this.street = street;
    this.addressNumber = addressNumber;

    this.describe = () => {
        return "\nCountry: " + this.country + "\nCity: " + this.city + "\nHome Adress: "
        + this.street + ", " + this.addressNumber;
    }
}

function Person(gender, age, width, height, hairColor, name, address, phone) {
    this.gender = gender;
    this.age = age;
    this.width = width;
    this.height = height;
    this.hairColor = hairColor;
    this.name = name;
    this.address = address;
    this.phone = phone;

    this.describe = () => {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old. My height is " + this.height +
        " and my hair color is " + this.hairColor + ". " + this.address.describe()
        + "\n my phone is a/an " + this.phone);    
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
    this.lowerCaseName = () => {
        return this.name.toLowerCase();
    }
    
}   

const benAddress = new Address("Israel", "Kfar Yona", "Turmus/Hacalanit", "43/32");
const almogAddress = new Address("Israel", "Kfar Yona", "Turmus/Hacalanit", "43/32");
const yaelAddress = new Address("Israel", "Kfar Yona", "Turmus", 43);
const sagivAddress = new Address("Israel", "Kfar Yona", "Hacalanit", 32);
const roeeAddress = new Address("Israel", "Bet Shean", "___/___", "___/___");

const ben = new Person("male", 13, 50, 155, "black", "Ben", benAddress, "iphone");
const almog = new Person("female", 13, 50, 154, "light-brown", "Almog", almogAddress, "iphone");
const yael = new Person("female", 43, 70, 170, "brown", "Yael", yaelAddress, "samsung");
const sagiv = new Person("male", 45, 90, 175, "black", "Sagiv", sagivAddress, "iphone");
const roee = new Person("male", 11, 60, 165, "black", "Roee", roeeAddress, "samsung");