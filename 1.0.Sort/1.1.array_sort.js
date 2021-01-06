// The build-in Array.prototype.sort() default ascending sort,
// convert the element into strings, then compare their sequences of UTF-16 code units values.

const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log(months.sort());
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// To fix this, you can tell JS how to sort, define your own sort method
// if it returns a negative number, a should come BEFORE b
// if it returns a positive number, a should come AFTER b
// if it returns 0, a and b are the same

function descendingOrder(a, b){
    return b - a
}
let y1 = [6,4,15,10].sort(descendingOrder)
console.log(y) //[15,10,6,4]


function ascendingOrder(a,b){
    return a - b
}
let y2 = [6,4,15,10].sort(ascendingOrder)
console.log(y) //[4,6,15,10]


function compareByLen(strA, strB){
    return strB.length - strA.length
}
let x = ['hello', 'wor', 'Data Structures', 'Algos'].sort(compareByLen)
console.log(x) // [ 'Data Structures', 'hello', 'Algos', 'wor' ]
