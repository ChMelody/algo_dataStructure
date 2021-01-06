// Selection Sort (don't scale well)
// complexity time O(n^2) space O(1), still very slow even with nearly sorted data
// Similar to bubble sort, but first find the min and then put it at the beginning
// Compare to Bubble Sort, when you want to minimize the number of the actual swapping, selection sort is better because you don't swap until you find the min

function selectionSort1(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i
        
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }

        // optimized: only swap if i is not the min, to avoid unneccessarily swap with itself
        if(i !== min){
            // console.log("***************")
            // console.log(arr)
            // console.log("swapping to: ")
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
            // console.log(arr)
        }
    }
    return arr; 
}

// ES15 syntax
function selectionSort(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for(let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j; 
            }
        }
        if(i !== min) swap(arr, i, min)
    }
    return arr; 
}

console.log(selectionSort([0,2,34,22,5,10,99,4])) // [0,2,4,5,10,22,34,99]

