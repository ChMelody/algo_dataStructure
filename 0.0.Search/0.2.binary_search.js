// Binary Search (only works if array is sorted)
// Divide and Conquer:  cut in half, compare to the middle, then move pointer left and right

// Write a function which accepts a sorted array and a target value, returns the index at which the value exists, otherwise return -1

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length -1
    let middle = Math.floor((start + end) / 2)

    while(arr[middle] !== target && start <= end){
        // if middle is too big
        if(target < arr[middle]) end = middle -1;
        else start = middle + 1
        middle = Math.floor((start + end) /2)
    }

    return arr[middle] === target ?  middle : -1;
}

console.log(binarySearch([0,2,3,4,16,26,69,90],26)) // 5
console.log(binarySearch([0,2,3,4,16,26,69,90],99)) // -1


