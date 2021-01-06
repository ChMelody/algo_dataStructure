// Bubble Sort (don't scale well)
// Generally O(n^2) but mush faster if data is nearly sorted
// If array is almost or sorted with the optimized approach time complexity is O(n)

// ES5 syntax
function swap(arr, idx1, idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

// OR ES2015 syntax
const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

// naive O(n^n)
function bubbleSort1(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

// slightly improved, each loop will reduce length by 1 because the last one of that loop is already sorted
function bubbleSort2(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        console.log("ONE PASS COMPLETE")
    }
    return arr;
}

// ES2015 version 
function bubbleSort3(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i -1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
            }
        }
    }
    return arr;
}

// further optimized with noSwaps (especially useful for nearly sorted)
function bubbleSort(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    let noSwaps; 
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i -1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr;
}



console.log(bubbleSort([37,45,29,8])) // [8,29,37,45]