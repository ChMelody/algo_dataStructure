// Find how many substring matches targetString

// NAIVE approach
// time complexity O(n * m) where n is the size of str, m is the size of target

function naiveSearch(str, target){
    let count = 0;

    // loop over the given string
    for(let i = 0; i < str.length; i++){
        // loop over the target string
        for(let j = 0; j < target.length; j++){
             // if the characters dont match, break out of the inner loop
            if(str[i+j] !== target[j]) break;
            // if the characters do match, keep going
            // at the end of the loop, find a match, count++ of matches
            if(j === target.length-1) count++;
        }
    }
    // return the count; 
    return count; 
}

console.log(naiveSearch('lorie loled', 'lo')) // 2
console.log(naiveSearch('lorie loled', 'lol')) // 1
console.log(naiveSearch('lorie loled', 'pp')) // 0
