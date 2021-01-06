// Insertion Sort (don't scale well)
// complexity time O(n^2) space O(1), much faster when data is nearly sorted
// Insertion works well when you continously have data coming in and maintain a running sort. 
// Builds up the sort by gradually creating a larger left half which is always sorted
// Key different than Bubble & Selection Sort:

// Pseudocode
// Start by picking the 2nd element in the array
// Now compare the 2nd with the one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, it iterate thru the sorted portion
// (i.e. the left side) to place the element in the correct place. 
// repeat until the array is sorted 


function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];

        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
            arr[j] = currentVal
        }
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]))