//Radix Sort
// Time complexity best & average & worst O(nk) n = length of array, k = number of digits
// Space complexity O(n+k)
// It does not compare! 
// It exploits the fact that information about the size of a number is encoded in the number of digits
// More digits means a bigger number

                    // starting 0 backward
function getDigit(num, position){
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10; 
}

// console.log(getDigit(1569, 0)) //9
// console.log(getDigit(1569, 1)) //6
// console.log(getDigit(1569, 2)) //5
// console.log(getDigit(1569, 3)) //1

function digitCount(num){
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}
// console.log(mostDigits([33,56,234,99901])) //5

function radixSort(nums){
    let maxDigitCount = mostDigits(nums)
    
    for(let k = 0; k < maxDigitCount; k++){
        // create 10 empty buckets
        let digitBuckets = Array.from({length: 10}, () => [])

        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)

            digitBuckets[digit].push(nums[i])
        }

        nums = [].concat(...digitBuckets)
    }
    return nums; 
}

console.log(radixSort([1556,4,3556,593,408,4386,902,7,8157,86,9637,29])) 