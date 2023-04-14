const myArr = [26.77,28.33,32.55,87.55]
let mark = 0;
for (let i = 0; i < myArr.length; i++) {
    mark += myArr[i];
    
}
const avarage = mark/myArr.length
console.log(avarage);