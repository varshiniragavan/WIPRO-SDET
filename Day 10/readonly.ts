interface Task {
    readonly title: string;
    completed: boolean;
}

const myTask: Readonly<Task> = {
    title: "Do Homework",
    completed: true
}

const myTask1: Task = {
    title: "Do Homework",
    completed: true
}


console.log(myTask);
console.log(myTask1);

const scores: ReadonlyArray<number> = [10, 20, 30];
console.log(scores[0]);