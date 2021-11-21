// /**
//  * ********** FUNCTIONS *********
//  *
//  *
//  *
//  * 1) Total
//  * 2) Deterministic
//  * 3) No Observable Side-Effects
//  *
//  * ---- TOTAL ----
//  * For every input there is a corresponding output
//  *
//  * ---- DETERMINISTIC ----
//  * Always recieve the same output for a given input
//  *
//  * ---- NO Side Effects ----
//  * No Observable effects besides computing a value
//  *
//  *
//  * --> Same input same output
//  */
// const { curry } = require("ramda");

// // const curry = (f: Function) => x => y => f(x, y)
// // const add = (x: number, y: number) => x + y

// // console.log(add(1,2));

// // console.log(add([1,2]));

// // const toPair = (f: Function) =>
// //     ([x, y]) => f(x, y)

// // const fromPair = (f: Function) =>
// //     (x, y) => f([x, y])

// // const result = fromPair(toPair(add))(1,2)

// // console.log(result);

// // const flip = (f: Function) => (y, x) => f(x, y)

// // const result = flip(add)(1,2)

// // console.log(result)

// // const unCurry = (f:Function) => (x, y) => f(x)(y)

// // const curryiedAdd = curry(add)

// // const increment = curryiedAdd(1)

// // const result = increment(2)

// // console.log(result);

// // CURRY -> I choose currieng when I wanna remember argument

// // const filter = curry((f: Function, xs: Array<number>) => xs.filter(f));

// const add = (x: number, y: number): number => x + y;

// const modulo = (x: number) => (y: number) => y % x;

// const isOdd = modulo(2);

// const filter = curry(
//   (f: CallableFunction, xs: Array<number>): Array<?number> => xs.filter(f)
// );

const _ = require("ramda");

const modulo = _.curry((x, y) => y % x);

const isOdd = modulo(2);

const filter = _.curry((f, xs) => xs.filter(f));

const filterOdds = filter(isOdd);

console.log(filterOdds([1,2,3,4,5,6,7,8]))