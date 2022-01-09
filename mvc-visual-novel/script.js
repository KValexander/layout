// Onload
window.addEventListener("load", function() {
	// Calculating the minimum content height
	height = document.documentElement.scrollHeight;
	head_height = document.querySelector("header").clientHeight;
	foot_height = document.querySelector("footer").clientHeight;
	result = height - (head_height + foot_height) - 3;
	document.querySelector("main").style["min-height"] = `${result}px`;

	document.querySelectorAll("img").forEach(elem => {
		elem.addEventListener("click", e => popup.image(e.target.src));
	});
});