const numbers = [12,23,34,45]
/**
 * sum
 */
const sumResult =numbers.reduce((pevNum, curNum) => {
    return pevNum  + curNum;
},0);
console.log(sumResult);

/**
 * sup
 */
const supResult =numbers.reduce((pevNum, curNum) => {
    return pevNum  - curNum;
},0);
console.log(supResult);


/**
 * multiple
 */
const multiResult =numbers.reduce((pevNum, curNum) => {
    return pevNum  * curNum;
},0);
console.log(multiResult);

/**
 * divided
 */
const divResult =numbers.reduce((pevNum, curNum) => {
    return pevNum  / curNum;
},0);
console.log(divResult);

// function operation (opr) {
//     const Result =numbers.reduce((pevNum, curNum) => {
//         return pevNum / curNum;
//     },0);
//     console.log(Result);
// }
// operation()



