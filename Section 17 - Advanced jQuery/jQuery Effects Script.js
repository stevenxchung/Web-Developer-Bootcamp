// .fadeOut()
// Hide the matched elements by fading them to transparent.
// $("button").on("click", function() {
// 	$("div").fadeOut(1000, function() {
// 		console.log("Fade completed!");
// 		$(this).remove();
// 		console.log("All divs removed!");
// 	});
// });

// .fadeIn()
// Display the matched elements by fading them to opaque.
// $("button").on("click", function() {
// 	$("div").fadeIn(1000, function() {
// 		console.log("Fade completed!");
// 	});
// });

// .fadeToggle
// Display or hide the matched elements by animating their opacity.
// $("button").on("click", function() {
// 	$("div").fadeToggle(500);
// });

// .slideDown()
// Display the matched elements with a sliding motion.
// $("button").on("click", function() {
// 	$("div").slideDown();
// });

// .slideUp()
// Hide the matched elements with a sliding motion.
// $("button").on("click", function() {
// 	$("div").slideUp();
// });

// .slideToggle()
// Display or hide the matched elements with a sliding motion.
$("button").on("click", function() {
	$("div").slideToggle(1000, function() {
		$(this).remove();
		console.log("Slide completed!");
	});
});