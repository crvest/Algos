
// Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

function bookIndex(arr) {
    var newStr = "";

    // loop through array
    for(i = 0; i < arr.length; i++) {
        // comma and space before each new range
        if(i < arr.length && i != 0){
            newStr += ", ";
        }

        // establish start and end points for page range
        if(arr[i+1] === arr[i]+1){
            var start = arr[i];
            // loop through array while numbers are consecutive
            while(arr[i+1] === arr[i]+1){
                i++;
            }
            var end = arr[i];
            newStr += start + "-" + end;
        }

        else {
            newStr += arr[i]
        }
    }

    return newStr;
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))
