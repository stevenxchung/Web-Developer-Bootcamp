// jQuery Methods

// .text()
// Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.
var textOnHover = document.querySelector("h1");
textOnHover.addEventListener("click", function() {
	$("h1").text("Y0u'v3 Ju5t B33n H4ck3d!")
});

// .html()
// Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
$("li").click(function() {
  var htmlString = $(this).html();
  $(this).text(htmlString);
});

// .val()
// Get the current value of the first element in the set of matched elements or set the value of every matched element.
$("input").val("Hello There!");

// .attr()
// Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
$("img").css("width", "300px");

var imageOnHover = document.querySelector("img");
imageOnHover.addEventListener("click", function() {
	$("img").attr("src", "https://static1.squarespace.com/static/520c9b1de4b021ed6a2c9138/5233adafe4b05512472e5ae7/528c1775e4b0e9839ff6bf2d/1488320408302/?format=1500w")
});

// .addClass()
// Adds the specified class(es) to each element in the set of matched elements.
$("li").addClass("correct");

$("li").click(function() {
  $(this).addClass("wrong");
});

// .removeClass()
// Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
$("h1").addClass("correct");

$("h1").click(function() {
  $(this).removeClass("correct");
});

// .toggleClass()
// Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.

$("li").click(function() {
	$(this).toggleClass("done");
});