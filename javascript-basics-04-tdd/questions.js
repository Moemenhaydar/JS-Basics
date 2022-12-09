
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e", " ");

}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    return text.charAt(4);

}
const showChar9 = (text) => {
    return text.slice(0,9);

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return typeof text=="string";

}
const getExtension = (text) => {
    var split=text.split(".");
    return split[split.length-1];

}
const countSpaces = (text) => {
    return text.split(" ").length -1;

}
const InverseString = (text) => {
    return text.split("").reverse().join("");

}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map((e) => { 
        return Math.abs(e);
    });

}
const circleSurface = (radius) => {
    return Math.round(radius * radius * Math.PI);

}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab,ac);

}
const BMI = (weight, height) => {
    return Math.round((weight / (height * height)) * 100) / 100;

}

const createLanguagesArray = () => {
    return ["Html", "CSS", "Java", "PHP"];

}

const createNumbersArray = () => {
    return[0,1,2,3,4,5];

}

const replaceElement = (languages) => {
    var a = ["Html", "CSS", "Java", "PHP"];
    a[2] = "Javascript";
    return a;

}

const addElement = (languages) => {
    var arr = ["Html", "CSS", "Javascript", "PHP"];
    arr.push("Ruby", "Python");
    return arr;

}

const addNumberElement = (numbers) => {
    var arr=[0,1,2,3,4,5];
    arr.unshift(-2,-1);
    return arr;

}

const removeFirst = (languages) => {
    var arr = ["Html", "CSS", "Javascript", "PHP", "Ruby", "Python"];
    arr.shift();
    return arr;

}

const removeLast = (languages) => {
    let arr = ["CSS", "Javascript", "PHP", "Ruby", "Python"];
    arr.pop();
    return arr;

}

const convertStrToArr = (social_arr) => {
    return social_arr.split(",");

}

const convertArrToStr = (languages) => {
    return languages.join(",");

}

const sortArr = (social_arr) => {
    social_arr.sort();
    return social_arr;
}

const invertArr = (social_arr) => {
    social_arr.reverse();
    return social_arr;

}