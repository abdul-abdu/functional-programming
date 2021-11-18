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
 * 
 * --> Same input same output
 */



const add = (x: number, y: number) => x + y


// console.log(add(1,2));
// console.log(add([1,2]));


// const toPair = (f: Function) => 
//     ([x, y]) => f(x, y)

// const fromPair = (f: Function) => 
//     (x, y) => f([x, y])

// const result = fromPair(toPair(add))(1,2)

// console.log(result);

// const flip = (f: Function) => (y, x) => f(x, y)

// const result = flip(add)(1,2)

// console.log(result)


const curry = (f: Function) => x => y => f(x, y)
const unCurry = (f:Function) => (x, y) => f(x)(y)

const curryiedAdd = curry(add)

const increment = curryiedAdd(1)

const result = increment(2)

console.log(result);
    