// Merge Sort
// Complexity best,worst and average time O(n log n) space O(n)
// It's combination of spliting, merging and sorting
// Takes advantage of arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// PART I merge two arrays into one sorted array
// complexity time O(n+m) space O(n+m)
function merge(arr1, arr2){
    let result =[];
    let p1 = 0;
    let p2 = 0;

    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1] < arr2[p2]){
            result.push(arr1[p1]);
            p1++;
        } else {
            result.push(arr2[p2]);
            p2++;
        }
    }

    // if(p1 < arr1.length){
    //     for(let i = p1; i < arr1.length; i++){
    //         result.push(arr1[i]);
    //     }
    // }
    while(p1 < arr1.length){
        result.push(arr1[p1]);
        p1++;
    }
    // if(p2 < arr2.length){
    //     for(let i = p2; i < arr2.length; i++){
    //         result.push(arr2[i]);
    //     }
    // }
    while(p2 < arr2.length){
        result.push(arr2[p2]);
        p2++;
    }

    return result;
}
//console.log(merge([1,10,50], [2,14,99,100]))  // [1,2,10,14,50,99,100]
//console.log(merge([], [2,14]))  //[2,14]


// PART II Merge Sort
// Pseudocode: 1.break up the array into halves until you have arrays that are empty or have 1 element
// 2. once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// 3. once the array has been merged back together, return the merged (and sorted) array

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([10,24,76,73,72,1,9]))
