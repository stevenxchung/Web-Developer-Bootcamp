// .click()
// Bind an event handler to the "click" JavaScript event, or trigger that event on an element.

$("h1").click(function() {
	alert("h1 clicked!");
});

$("button").click(function() {
	$(this).css("background", "pink");
	var text = $(this).text();
	console.log("you clicked " + "\"" + text + "\"");
});