function Phone(isSmart, length, width, height, phoneType) {
    this.isSmart = isSmart;
    this.length = length;
    this.width = width;
    this.height = height;
    this.phoneType = phoneType;
    this.describe = () => {
        return "\ntype:" + this.phoneType +
        "\nis it smart (true or false): " + this.isSmart + 
        "\nlength: " + this.length +
        "\nwidth:" + this.width + 
        "\nheight" + this.height;
    }
}
 
const nokia =  new Phone(false, 80, 10, 5, "nokia");
const iphone =  new Phone(true, 10, 30, 30, "iphone");
const samsung =  new Phone(true, 10, 40, 40, "samsung");
const huawei =  new Phone(true, 10, 40, 40, "huawei");
const lg =  new Phone(true, 15, 30, 30, "lg");
const xiaomi =  new Phone(true, 10, 40, 40, "xiaomi");

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

function Person(gender, age, width, height, hairColor, name, address, phone, friend) {
    this.gender = gender;
    this.age = age;
    this.width = width;
    this.height = height;
    this.hairColor = hairColor;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.friend = friend;

    this.describe = () => {
        return "Hello, my name is " + this.name + " and I am " + this.age + " years old. My height is " + this.height +
        " and my hair color is " + this.hairColor + ". " + this.address.describe()
        + "\n my phone is a/an " + this.phone.describe()    
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
    this.setFriend = (friend) => {
        this.friend = friend;
    }
    
}  

const benAndAlmogAddress = new Address("Israel", "Kfar Yona", "Turmus/Hacalanit", "43/32");
const yaelAddress = new Address("Israel", "Kfar Yona", "Turmus", 43);
const sagivAddress = new Address("Israel", "Kfar Yona", "Hacalanit", 32);
const roeeAddress = new Address("Israel", "Bet Shean", "___/___", "___/___");


/*
    Example of ben without objects:
    const benGender = "male";
    const benAge = 13;
    const benWidth = 50;
    const benHeight = 155;
    const benHairColor = "black";
    const benName = "Ben";
    const benCountry = "Israel";
    const benCity = "Kfar Yona";
    ...
    ...
    ...
    const benPhoneIsSmart = true;
    ...
    ...
    ...
*/
const almog = new Person("female", 13, 50, 154, "light-brown", "Almog", benAndAlmogAddress, iphone);
const yael = new Person("female", 43, 70, 170, "brown", "Yael", yaelAddress, samsung);
const sagiv = new Person("male", 45, 90, 175, "black", "Sagiv", sagivAddress, iphone);
const roee = new Person("male", 11, 60, 165, "black", "Roee", roeeAddress, samsung);
const ben = new Person("male", 13, 50, 155, "black", "Ben", benAndAlmogAddress, iphone, roee);
roee.setFriend(ben);