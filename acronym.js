
// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""


function acronym(str) {
newStr = str[0];

for (i = 0; i < str.length; i++){
    console.log(str[i]);
    if(str[i] == " " && str[i+1] != " "){
        newStr += str[i+1];
    }
}
return newStr.toUpperCase()
}

console.log(acronym("there's no free lunch - gotta pay yer way"));


// array solution
function acronym(str) {
    arr = str.split(" ");
    newArr = [];
    for(i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase());
    }
    return newArr.join("")
}

console.log(acronym("there's no free lunch - gotta pay yer way"));