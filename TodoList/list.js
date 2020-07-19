var todos = ["Buy New Turtle"];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
}, 500);

var input = prompt("What would you like to do?")

while (input !== "quit") {
    if(input === "list") {
    //handle input
      console.log(todos);
    } else if (input === "new") {
      //ask for new todo
      var newTodo = prompt ("Enter new todo");
      //add to todos array
      todos.push(newTodo);
     }
    //ask again for new input
     input = prompt("What would you like to do?")
}
console.log("OK, YOU QUIT THE APP");
