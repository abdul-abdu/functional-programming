/**
 * ********** FUNCTIONS *********
 * 
 * 
 * 
 * 1) Total
 * 2) Deterministic
 * 3) No Observable Side-Effects
 * 
 * ---- TOTAL ----
 * For every input there is a corresponding output
 * 
 * ---- DETERMINISTIC ----
 * Always recieve the same output for a given input 
 * 
 * ---- NO Side Effects ----
 * No Observable effects besides computing a value
 * 
 */


var xs = [1,2,3,4,5]

console.log(xs.splice(0, 3));
console.log(xs.splice(0, 3));
console.log(xs.splice(0, 3));
