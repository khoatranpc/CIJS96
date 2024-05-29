// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
// // 0 1 2 3 4
// // for (let i = 0; i < cars.length; i++) {
// //     console.log(cars[i]);
// // }

// const newArr = cars.map((value, index) => {
//     return "Khoa";
// });
// console.log(newArr);

// const filterArr = cars.filter((item, idx) => {
//     return item === "BMW";
// });
// console.log(filterArr);


// const listPerson = [
//     {
//         name: 'Doraemon',
//         age: 10,
//     },
//     {
//         name: 'nobita',
//         age: 5
//     }
// ];

// for (let i = 0; i < listPerson.length; i++) {
//     const element = listPerson[i];
//     for (const key in element) {
//         console.log(key);
//     }
// }



// console.log("====== bài4 ======");
// const listNumber = [1, 2, 3, 4];
// const doubleListNumber = listNumber.map((item) => {
//     return item * 2;
// });
// console.log(doubleListNumber);
// console.log("====== bài5 ======");

// const listNumber = [1, 2, 3, 4, 5, 6];

// const result = listNumber.filter((item) => {
//     return item % 2 !== 0
// });
// console.log(result);

// console.log("====== bài6 ======");
// const employees = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];

// const result = employees.reduce((prevValue, item) => {
//     return {
//         workingDays: prevValue.workingDays + item.workingDays
//     }
// }, {
//     workingDays: 0
// });
// console.log(result);

// console.log("====== bài7 ======");
// const employees = [
//     { id: 1, name: "John", salary: 0 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];

// let MAX = employees[0].salary;
// let indexMAX = 0;

// for (let i = 0; i < employees.length; i++) {
//     const element = employees[i];
//     if (element.salary > MAX) {
//         MAX = element.salary;
//         indexMAX = i;
//     }
// }
// console.log(employees[indexMAX]);
// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// let MAX = employees[0].workingDays - employees[0].lateDays;
// let indexMAX = 0;

// for (let i = 0; i < employees.length; i++) {
//     const element = employees[i];
//     const works = (element.workingDays - element.lateDays);
//     if (works > MAX) {
//         MAX = works;
//         indexMAX = i;
//     }
// }
// console.log(employees[indexMAX]);

// câu 9
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];
// const result = {};
// employees.forEach((item) => {
//     if (!result[item.name]) {
//         result[item.name] = [];
//     }
//     result[item.name].push(item);
// });
// console.log(result);




// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];

// let MAX = employees[0].workingDays / employees[0].salary;
// let indexMAX = 0;

// for (let i = 0; i < employees.length; i++) {
//     const element = employees[i];
//     const works = (element.workingDays / element.salary);
//     if (works > MAX) {
//         MAX = works;
//         indexMAX = i;
//     }
// }
// console.log(employees[indexMAX]);


const employees = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];

const result = {};

employees.forEach((item) => {
    if (!result[item.workingDays]) {
        result[item.workingDays] = 0;
    }
    result[item.workingDays]++;
})
console.log(result);