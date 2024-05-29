// import { sum as mathSum } from './math.js';

import math, { sum } from './math.js';

// normal function
// f(x) = a*x + b;

// hàm này không trả về giá trị gì cả, chỉ để thực thi
function sayHello(x) {
    //code ...
    let a = 2;
    let b = 9;
    const result = a * x + b;
    console.log(result);
    return result;
}
let resultSayHello = sayHello(4);


// arrow function
// cú pháp cơ bản nhất

// const sayHi = (x) => {
// let a = 2;
// let b = 9;
// return a * x + b;
// }

// khi suy ra (=>) là một giá trị hoặc các logic trả về giá trị, thì giống như phép return bình thường 
// {}
const sayHi = (x, y, z) => ({ name: 'MindX' });

const result = sayHi(2);
console.log(result);


// template literal
// được ra đời để phục vụ việc nối chuỗi hay xử lý chuỗi với biến (giá trị)

const user = "MindX";
// const text = "Hello" + " " + user;
const text = `Hello ${user}`;
console.log(text);


console.log("===== MODULE =====");

const resultSum = sum(1, 2);

console.log(resultSum);

const PI = 3.14;

// ===================
console.log("===== TOÁN TỬ 3 CHẤM =====");
const listNumber = [1, 2, 3];

const tmp = [...listNumber, 12, 3, 4, 5,];
console.log(tmp);

// ===================
console.log("===== Phá vỡ cấu trúc- Destructering =====");
// chỉ áp dụng được cho mảng hoặc object