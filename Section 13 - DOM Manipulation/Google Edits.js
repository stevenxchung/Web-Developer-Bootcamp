// Manipulating DOM on Google.com

// Change the Google logo
var logo = document.querySelector("#hplogo");

logo.setAttribute("src", "https://i.pinimg.com/originals/2b/be/15/2bbe1591e28725b3f04217fee988b5e1.jpg");

logo.style.width = "200px";
logo.style.height = "200px";
logo.style.paddingTop = "0px";
logo.style.border = "2px solid purple";

var links = document.getElementsByTagName("a");

// Modify all "a" tags
for (var i = 0; i < links.length; i++) {
	links[i].style.background = "pink";
	links[i].style.border = "1px dashed purple";
}

// Retrieve attributes
for (var i = 0; i < links.length; i++) {
	console.log(links[i].getAttribute("href"));
}

// Set attributes
for (var i = 0; i < links.length; i++) {
	links[i].setAttribute("href", "http://www.bing.com");
}