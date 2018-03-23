// .keypress()
// Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.

$("input").keypress(function(event) {
	if(event.which === 13) {
		alert("You hit \"enter\"");
	}
	console.log(event);
});