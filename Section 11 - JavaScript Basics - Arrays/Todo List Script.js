var todos = ["Buy new turtle"];

var input = prompt("Please enter a command: \"new\", \"list\", \"delete\", or \"quit\"");

// While user has not quit the application
while (input !== "quit") {
	if (input === "list") {
		// Lists the todos
		listTodos();
	}
	else if (input === "new") {
		// Add todo
		addTodo();
	}
	else if (input === "delete") {
		// Delete todo
		deleteTodo();
	}
	// Ask again for new input
	var input = prompt("Please enter a command: \"new\", \"list\", \"delete\", or \"quit\"");
}
console.log("Application Terminated!");

// Function that lists the todos
function listTodos() {
	console.log("***************");
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("***************");
}

// Function that adds a todo
function addTodo() {
	// Ask for new todo
	var newTodo = prompt("Enter new todo");
	// Add to todos array
	todos.push(newTodo);
	console.log("Todo added at index: " + todos.indexOf(newTodo))
}

// Function that deletes a todo
function deleteTodo() {
	// Ask for index todo to be deleted
	var index = prompt("Enter index of todo to delete");
	// Delete that todo
	todos.splice(index, 1);
	console.log("Todo deleted at index: " + index);
}