function welcome(name = "Guest") { // default params
    console.log(`Welcome ${name}!`);
}

welcome("varsh")
welcome("swetha")
welcome()

const nums = [1, 2, 3, 4, 5]; // spread operator
const newNums = [...nums, 6, 7, 8];
console.log(newNums);

const obj = {name: "varsh"};
const updatedObj = {...obj, age: 23};
console.log(updatedObj);

const cal = { // rest operator
    sum: (...nums) => nums.reduce((a, b) => a + b, 0), // rest parameters
}

console.log(cal.sum(1, 2, 43, 4))

// destructuring
// const arr = [];
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// const fourth = arr[3];

const [first, second, third, fourth, fifth] = ["varsh", "Swetha", "sharan", "Hari"]; // pos-based extraction
const [one, two, ...three] = [1, 3, 5, 6, 7];
console.log(first, second, third, fourth, fifth);
console.log(one, two, three)

const { name, age } = {name: "varsh", age: 23}; // key-based extracted
console.log(name, age);