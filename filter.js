const myArr = [23,34,33.67,35,789,678]

const oneItem = myArr.filter((number) => number == 23)
const moreItem = myArr.filter((number) => number >= 100)
console.log(oneItem);
console.log(moreItem);