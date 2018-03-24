// Check off specific Todos by clicking
// $("li").click(function() {
// 	//if li is gray
// 	if ($(this).css("color") === "rgb(128, 128, 128)") {
// 		// Turn it black
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}
// 	else {
// 		// Turn it gray
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

// Alternatively...
$("ul").on("click", "li", function() {
	$(this).toggleClass("complete");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Append to list
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// Grabbing new Todo text from input
		var todoText = $(this).val();
		// Clear input
		$(this).val("");
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// Toggle input
$(".fa-bolt").click(function() {
	$("input[type='text']").fadeToggle();
})