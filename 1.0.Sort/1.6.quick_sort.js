// Quick Sort
// Time complexity best & average: O(n log n), worse case(when pivot picked the min or max every time) O(n^2)
// Space complexity O(log n)
// Like merge sort, arrays of 0 or 1 element are always sorted
// Pick one element(called the 'pivot', anywhere in the array) and finding the index where the pivot should end up in the sorted array
// Anything that is smaller than pivot move to the right, anything that is bigger than pivot move to the left (not sorted) 
// Only pivot is in the right position(idx) at this point, then keep repeating the process

// Pivot Helper should do it in place, that is, it should not create a new array
// when complete, the helper should RETURN the index of the pivot
function pivot(arr, start=0, end = arr.length-1){
    function swap(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // we pick the first element as the pivot
    let pivot = arr[start]; 
    let swapIdx = start;
    for(let i = start+1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

console.log(pivot([4,8,2,1,5,7,6,3])) //3

function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
        let pivotIdx = pivot(arr,left,right)
        // left
        quickSort(arr, left, pivotIdx-1) 
        // right
        quickSort(arr, pivotIdx+1, right)
    }
    
    return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]))
// [1,2,3,4,5,6,7,8]