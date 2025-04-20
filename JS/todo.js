//TO-DO App
// list - to show all todos
// add - to add a todo
// delete - to delete a task
// quit - to exit the todo
let todo = [];
let req = prompt("Please enter your request: ");

while(true){
    if (req == "quit"){
        console.log("Quitting the app !");
        break;
    }
    if(req == "list"){
        console.log("__________________")
        for(let i=0; i<=todo.length; i++){
            console.log(i+1, todo[i]);
        }
        console.log("_________________");
    }else if(req == "add"){
        let task = prompt("Please enter the task you want to add:");
        todo.push(task);
        console.log("Task added");
    }else if(req == "delete"){
        let idx = prompt("Please enter the task number:");
        todo.splice(idx, 1);
        console.log("Task deleted !");
    }else{
        console.log("Wrong request !");
    }
    req = prompt("Please enter your request: ");
}