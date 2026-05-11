let name = "Varsh";
console.log(name);
let name1: string = "Varsh";
let result: number | string;
result = 45;
result = "success";
console.log(name, result);
function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}
console.log(add(5, 10));
interface Person {
    id: number;
    name: string;
    age: number;
    role: Role;
    isAdmin?: boolean;
}
interface Person {
    email: string;
}
enum Role {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
}
const user: Person = {
    id: 1,
    name: "Varsh",
    age: 25,
    role: Role.User,
    email: "varsh@gmail.com"
};
const admin: Person = {
    id: 2,
    name: "Swetha",
    age: 30,
    email: "swetha@gmail.com",
    role: Role.Admin,
    isAdmin: true
};
console.log(user, admin);
let coordinates: [number, string] = [40.7128, "-74.0060"];
console.log("Coordinates:", coordinates);
let arr: number[] = [1, 2, 3];
console.log("Array:", arr);
class Storage<T> {
    private items: T[] = [];
    addItems(item: T): void {
        this.items.push(item);
    }
    getItem(index: number): T {
        return this.items[index]!;
    }
}
const names = new Storage<string>();
names.addItems("Varsh");
names.addItems("Swetha");
names.addItems("Arya");
console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3));

interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): void {
    console.log(arg.length);
}

logLength("Varsh");
logLength([1, 2, 3]);