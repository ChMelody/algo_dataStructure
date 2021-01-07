// Hash Tables, also commonly known as hash map 
// Nearly every programming language has some sort of hash table data structure. Because of their speed, hash tables are very commonly used

// Hash Tables are used to store key-value pairs, they are like arrays, but keys are not ordered
// Unlike arrays, hash tables are FAST for all of the following operations: finding values, adding new values, and removing values

// In JavaScript, hash table data structures: Objects (only allowed to use string as keys) and Maps 

// Write your own hash table using an array and a HASH FUNCTION in order to loop up values by key, need to convert keys into valid array indices

// What makes a good hash? (not a cryptographically secure one)
// 1. Fast (i.e. constant time)
// 2. Doesn't cluster outputs at specific indices, but distributes uniformly
// 3. Deterministic (same input yields same output)

// Prime numbers in the hash is helpful in spreading out the keys more uniformly. It's also helpful if the array that you're putting values into has a prime length

// Dealing with collisions, there are many strategies for it, but we'll focus on two:
// 1. Separate Chaining, we can store MORE THAN ONE value at EACH position using a more sophisticated data structure (e.g. an array(nested) or a linked list). This allows us to store multiple key-value pairs at the same index
// 2. Linear Probing, only store ONE piece of data at EACH position, when we find a collision, we search through the array to find the next empty slot. Unlike with separate chaining, this allows us to store a single key-value at each index



function hash(key, arrayLen){  // arrayLen should also be prime array length to improve distribution
    let total = 0; 
    let prime = 31;

    //                just to demonstrate one of the ways to improve hash speed with huge key (not the best but limit n to 100)
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        // .charCodeAt(idx)-96  --> give you the order of the letter in the alphabetical order e.g. 'a' = 1, 'b' = 2, 'c' = 3...
        let value = char.charCodeAt(0) - 96;
        // Using prime number and Mod prime array length to improve distribution, so it reduces clustering (too many being assigned to the same number/index)
        total = (total * prime + value) % arrayLen;
    }

    return total;
}

