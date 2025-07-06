// // // console.log("Hello, World!");

// // // var x = 5;
// // // var y = 10;
// // // var z = x + y;
// // // console.log(z);

// // function number(startNumber,endNumber,breakNumber,continueNumber) {
// //     // Check if the parameters are provided
// //     if (startNumber == undefined || endNumber == undefined || breakNumber == undefined || continueNumber == undefined) {
// //         console.log("Please provide all four parameters: startNumber, endNumber, breakNumber, continueNumber.");
// //     }
// //     for (var i = startNumber; i <= endNumber; i++) {
// //         if (i === breakNumber) {
// //             break;
// //         }
// //         if (i === continueNumber) {
// //             continue;
// //         }
// //         console.log(i);
// //     }
// // }

// // number(1, 10, 4, 8);







// // // arrow function/
// // var add = (a, b) => {
// //     return a + b;
// // }
// // caches.log(add( , ));

// // arry of objects
// var userData = [
//     { name: "John", age: 30, city: "New York" },
//     { name: "Jane", age: 25, city: "Los Angeles" },
//     { name: "Mike", age: 35, city: "Chicago" }
// ];

// if (userData.length == 0) {
//     console.log("No user data available.");
//     else if{
//         console.log("User data is available.");
//     }
// }


// userData.forEach((element,i,arr) => {
//     console.log();
// });





// bank code
// var users = [];
// var NumberOfUser = () => {
//     var num = prompt("Enter the number of users:");
//     for (var i = 0; i < num; i++) {
//         addUser();
//     }
// }

// var addUser = () => {
//     var name = prompt("Enter the user's name:");

//     var salary = prompt("Enter the user's salary:");

//     var id;
//     var isExist = true;
//     while (isExist) {
//         id = prompt("Enter the user's ID:");
//         isExist = users.some(user => user.id === id);

//         if (isExist) {
//             alert("This ID already exists. Please enter a unique ID.");
//         }
//     }

//     var newUser = {
//         name: name,
//         salary: salary,
//         id: id
//     };

//     users.push(newUser);
//     console.log("User added:", newUser);
// }

// var editUser = () => {

//     var idToFind = prompt("Enter the ID of the user whose salary you want to edit:");
//     var userToEdit = users.find(user => user.id === idToFind.trim());

//     if (userToEdit) {
//         console.log(`Editing user: ${userToEdit.name} (Current Salary: ${userToEdit.salary})`);
        
//         var newSalaryInput = prompt(`New salary for ${userToEdit.name} (leave blank to keep current: ${userToEdit.salary}):`);
//          if (userToEdit) {
//         console.log(`Editing user: ${userToEdit.name} (Current Salary: ${userToEdit.salary})`);
//         var newSalaryInput = prompt(`New salary for ${userToEdit.name} (leave blank to keep current: ${userToEdit.salary}):`);
//     }
// }
// }

// NumberOfUser();
// editUser();


