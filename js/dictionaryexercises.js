const randomEntry = (dictionary) => {
    if (Math.random() > 0.5) {
        dictionary["Ben"] = randomAge();
    }
}
const randomAge = () => {
    const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    return ages[Math.floor(Math.random() * ages.length)];
}
const dictionary1 = () => {
    const dictionary = {};
    dictionary["Ben"] = 13
    dictionary["Almog"] = 13
    dictionary["Yael"] = 43
    dictionary["Sagiv"] = 45
    dictionary["Marley"] = 5
    dictionary["Olla"] = 8
    return dictionary;
}

const dictionaryBenAge = (dictionary) =>{
    if (dictionary["Ben"]) {
        if (dictionary["Ben"] > 12) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const dictionaryLength = (dictionary) => {
    return Object.keys(dictionary).length;
}

const dictionary2 = () => {
    const dictionary = {};
    dictionary["13(1)"] = "Ben"
    dictionary["13(2)"] = "Almog"
    dictionary[43] = "Yael"
    dictionary[45] = "Sagiv"
    dictionary[5] = "Marley"
    dictionary[8] = "Olla"
    return dictionary;
}

const rockPaperScissors = () => {
    const random = Math.random();
    if (random < 1/3) {
        return "rock";
    } else if (random < 2/3) {
        return "paper";
    } else {
        return "scissors";
    } 
}

const randomFamilyMember = () => {
    const familyMembers = ["Ben", "Almog", "Yael", "Sagiv", "Marley", "Olla"];
    return familyMembers[Math.floor(Math.random() * familyMembers.length)];
}

const randomOption = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

const dictionary3 = (dictionary) => {
    dictionary["randomFamilyMember"] = randomFamilyMember(); 
    dictionary["randomOption"] = randomOption();
}

const dictionary4 = (dictionary) => {
    const familyMembers = ["Ben", "Almog", "Sagiv", "Yael", "Marley", "Olla"];
    const toolsInRoom = ["computer" , "printer", "charger" , "iphone", "backpack"];
    dictionary["familyMembers"] =  familyMembers;
    dictionary["toolsInRoom"] = toolsInRoom;
}

const dictionary5 = () => {
    const dictionary = {};
    dictionary ["lion"] = "lion";
    dictionary ["penguin"] = "penguin";
    dictionary ["flamingo"] = "flamingo";
    dictionary ["dog"] = "dog";
    dictionary ["falcon"] = "falcon";
    dictionary ["horse"] = "horse";
    dictionary ["cat"] = "cat";
    dictionary ["pig"] = "pig";
    dictionary ["racoon"] = "racoon";
    dictionary ["fish"] = "fish";
    const dictionaryPrinter = Object.values(dictionary);
    return dictionaryPrinter;
}

//exercise 25
const LongestCountryNameGenerator = (countries) => {
    let maxLength = Number.MIN_SAFE_INTEGER;
    let longestCountry = "";
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        if (country.length > maxLength) {
            maxLength = country.length;
            longestCountry = country;
        }
    } return longestCountry;
}

//exercise 2
// /[^A-Za-z0-9]/g is explained below:
//[^A-Z] matches anything that is not enclosed between A and Z
//[^a-z] matches anything that is not enclosed between a and z
//[^0-9] matches anything that is not enclosed between 0 and 9
//[^_] matches anything that does not enclose _
// .replace replaces one string with another for example: visit microsoft to visit w3schools
//microsoft is replaced with w3schools ^
const palindromeBoolean = (word) => {
    const something = /[^A-Za-z0-9]/g;
    word = word.toLowerCase().replace(something, '');
    for (var i = 0; i < word.length/2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
