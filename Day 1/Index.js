let a = 5;
let b = 2;

// Arithmatic Operations

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Relational operators

console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);

//Logical operators

console.log(a>1 && b>1);
console.log(a>1 || b<0);

// String operations

let c = "Akhilesh";
console.log(c.toLowerCase());
console.log(c.toUpperCase());



let arr = [1, "Akhilesh", 3, false, 5];
let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length; i++){
    console.log("Element at index after * 2 ", i, ":", arr2[i] * 2);
}
let count = arr2.length - 1;
while (count >= 0) {
    console.log("Element at index after * 2 ", count, ":", arr2[count] * 2);
    count--;
}

arr2.forEach(function(x) {
    console.log("Element after * 2 ", x, ":", x * 5);
});
arr2.map(function(x) {
    console.log("Element after * 2 ", x, ":", x * 10);
});



let option = "B";

switch(option) {
    case "A":
        console.log("Option is A");
        break;
    case "B":
        console.log("Option is B");
        break;  
    default:
        console.log("Invalid option");
}