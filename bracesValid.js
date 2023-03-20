
// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve

function bracesValid(str) {
    testArr = [];
    for(i = 0; i < str.length; i++) {
        // if left brace encountered, store in test array
        if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
            testArr.push(str[i]);
        }

        // test for encountered right brace against test array
        else if (str[i] == ")" && testArr[testArr.length-1] == "(" ) {
            testArr.pop();
        }
        else if (str[i] == "]" && testArr[testArr.length-1] == "[" ) {
            testArr.pop();
        }
        else if (str[i] == "}" && testArr[testArr.length-1] == "{" ) {
            testArr.pop();
        }
        // if right brace but no equivalent left brace in test array, then false
        else if (str[i] == ")" || str[i] == "]" || str[i] == "}") {
            return false
        }
    }

    // if left braces still stored in test array after iterating through, then false
    if (testArr.length > 0) {
        return false
    }
    return true
}

console.log(bracesValid("({[({})]})"));
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));