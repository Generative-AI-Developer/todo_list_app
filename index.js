import inquirer from "inquirer";
let todos = [];
async function Createtodos(todos) {
    do {
        console.log("Welcome to the todo list");
        let operation = await inquirer.prompt([
            {
                type: "list",
                name: "operator",
                message: "What do you want to do?",
                choices: ["Add", "View", "Update", "Delete", "Exit"]
            }
        ]);
        if (operation.operator === "Add") {
            let add = await inquirer.prompt([
                {
                    type: "input",
                    name: "additems",
                    message: "Please add items:"
                }
            ]);
            todos.push(add.additems);
            console.log(todos);
        }
        if (operation.operator === "View") {
            console.log(todos);
        }
        if (operation.operator === "Update") {
            let update = await inquirer.prompt([
                {
                    type: "list",
                    name: "updateitem",
                    message: "Select item to update",
                    choices: todos
                }
            ]);
            let update2 = await inquirer.prompt([
                {
                    type: "input",
                    name: "updateitem2",
                    message: "Please update item:",
                    default: update.updateitem
                }
            ]);
            todos = todos.map(item => (item === update.updateitem ? update2.updateitem2 : item));
            console.log(todos);
        }
        if (operation.operator === "Delete") {
            let remove = await inquirer.prompt([
                {
                    type: "list",
                    name: "deleteitem",
                    message: "Select item to delete",
                    choices: todos
                }
            ]);
            todos = todos.filter(item => item !== remove.deleteitem);
            console.log(todos);
        }
        if (operation.operator === "Exit") {
            break;
        }
    } while (true);
}
Createtodos(todos);
// // what to do in project
// // array
// // operation
// // function
// let todos: string[] = []
// async function Createtodos(todos:string[])
// {
//     do{
// let welcom = console.log("Well come to todo list")
// let operation = await inquirer.prompt
// ([
// {
//     type:"list",
//     name:"operator",
//     message:"What you want to do",
//     choices:["Add", "View", "Update", "Delete"]
// }
// ])
// if(operation.operator==="Add"){
//     let add = await inquirer.prompt([
//         {
//             type: "input",
//             name:"additems",
//             message: "Please add Items",
//         }
//     ])
//     todos.push(add.additems)
//     console.log(todos)
// }
// if(operation.operator==="View"){
//     console.log(todos)
// }
// if(operation.operator === "Update"){
// let update = await inquirer.prompt([
//     {
//         type: "list",
//             name:"updateitem",
//             message: "Select item to update",
//             choices:todos
//     },
// ]) 
// let update2 = await inquirer.prompt(
//     {
//             type: "list",
//             name:"updateitem2",
//             message: "Please update item",
//     }
// )   
// let newtodos  = todos.filter(val=>val!= update.updateitem)
// todos = [...newtodos, update2.updateitem2]
// }
// if(operation.operator === "Delete"){
//     let remove = await inquirer.prompt([
//         {
//             type: "list",
//                 name:"deleteitems",
//                 message: "Select item to delete",
//                 choices:todos
//         },
//     ]) 
// }
//     }
//     while(true)
// }
// Createtodos(todos)
