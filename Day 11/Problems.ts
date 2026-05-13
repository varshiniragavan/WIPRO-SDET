// 1. GENERIC API WRAPPER


async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Network request Failed: ' + response.statusText)
    }
    const data: T = await response.json();
    return data;
}

interface Album {
    userId: number,
    id: number,
    title: string
}

async function demo() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData<Album>(url);

    console.log("1. Fetched Album Data:");
    console.log(`Album ID: ${album.id}`)
    console.log(`Album Title: ${album.title}`)
}

demo();


// 2. RECORD MAPPING FOR CONFIGURATION


enum Role {
    Admin = "Admin",
    Editor = "Editor",
    Guest = "Guest"
}

const PermissionMap: Record<Role, boolean> = {

    Admin: true,
    Editor: true,
    Guest: false
};

//console.log(PermissionMap);
console.log("\n2.Role Permissions:");
for (const role in PermissionMap) {

    console.log(
        `${role} -> ${PermissionMap[role as Role]}`
    );
}


// 3. EXHAUSTIVENESS CHECKING


console.log("\n3. Exhaustiveness Checking:");

type TaskStatus =
    | "Open"
    | "InProgress"
    | "Closed";

function handleTask(status: TaskStatus) {

    switch (status) {

        case "Open":
            console.log("Task Status: Open");
            break;

        case "InProgress":
            console.log("Task Status: In Progress");
            break;

        case "Closed":
            console.log("Task Status: Closed");
            break;

        default:

            const exhaustiveCheck: never = status;

            return exhaustiveCheck;
    }
}

handleTask("Open");
handleTask("InProgress");
handleTask("Closed");


// 4. RECURSIVE NAVIGATION TYPE


console.log("\n4. Recursive Navigation Type:");

type FolderNode = {

    name: string;

    files?: string[];

    subFolders?: FolderNode[];
};

const projectFolder: FolderNode = {

    name: "Project",

    files: ["index.ts"],

    subFolders: [

        {
            name: "Components",
            files: ["Navbar.ts"]
        },

        {
            name: "Utils",
            files: ["helper.ts"]
        }
    ]
};

console.log("Folder Structure:");

console.log(JSON.stringify(projectFolder, null, 2));



// 5. TEMPLATE LITERAL TYPES


console.log("\n5. Template Literal Types:");

type MarginValue =
    `${number}px`
    | `${number}rem`
    | `${number}vh`;

let margin1: MarginValue = "10px";

let margin2: MarginValue = "2rem";

console.log("Margin 1:", margin1);

console.log("Margin 2:", margin2);



// 6. CONDITIONAL TYPES & infer


console.log("\n6. Conditional Types & infer:");

type UnwrapPromise<T> =

    T extends Promise<infer U>
        ? U
        : T;

type A = UnwrapPromise<Promise<string>>;

type B = UnwrapPromise<number>;

console.log("Promise<string> becomes:", "string");

console.log("number remains:", "number");




// 7. UNION MANIPULATION PUZZLE



console.log("\n7. Union Manipulation Puzzle:");

type AllEvents =
    | "click"
    | "dbclick"
    | "submit"
    | "reset"
    | "keypress";

type MouseEvents =
    Extract<AllEvents, "click" | "dbclick">;

type NonFormEvents =
    Exclude<AllEvents, "submit" | "reset">;

console.log("Mouse Events:");

const mouseEvent1: MouseEvents = "click";
const mouseEvent2: MouseEvents = "dbclick";

console.log(mouseEvent1);
console.log(mouseEvent2);
console.log("\nNon Form Events:");

const event1: NonFormEvents = "click";
const event2: NonFormEvents = "keypress";

console.log(event1);
console.log(event2);


// 8. ASYNC HIGHER ORDER FUNCTION



console.log("\n8. Async Higher Order Function:");

function safeExecute<T extends (...args: any[]) => Promise<any>>(fn: T) {

    return async (...args: Parameters<T>) => {

        try {

            return await fn(...args);

        } catch (error) {

            console.error("Execution Failed:", error);

            return null;
        }
    };
}

async function riskyOperation() {

    throw new Error("Something went wrong");
}

const safeFunction = safeExecute(riskyOperation);

safeFunction();



// 9. INDEX SIGNATURES


console.log("\n9. Index Signatures:");

interface UserMetadata {

    createdAt: Date;

    [key: string]:
        | string
        | number
        | boolean
        | Date;
}

const metadata: UserMetadata = {

    createdAt: new Date(),

    username: "Varsh",

    age: 23,

    verified: true
};

console.log("Metadata:");
console.log(metadata);



// 10. MAPPED TYPES WITH KEY REMAPPING


console.log("\n10. Mapped Types with Key Remapping:");

interface Car {

    make: string;
    model: string;
}

type ApiResponse<T> = {

    [K in keyof T as
        `DATA_${Uppercase<string & K>}`]: T[K];
};

type CarApi = ApiResponse<Car>;

const carData: CarApi = {

    DATA_MAKE: "Porsche",

    DATA_MODEL: "911"
};

console.log("Mapped API Response:");

console.log(carData);