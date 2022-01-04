let timer;

window.onload = function() {
	document.querySelectorAll(".head-slider .indicator").forEach((elem, i) =>  elem.addEventListener("click", function() {
		slide(i);
	})); slide(0);
}

function slide(current) {
	let ann = document.querySelectorAll(".head-slider .announce");
	let img = document.querySelectorAll(".head-slider .slides img");
	let ind = document.querySelectorAll(".head-slider .indicator");

	if(current >= ann.length) current = 0;
	else if(current < 0) current = ann.length - 1;

	ann.forEach(elem => elem.style.display = "none");
	img.forEach(elem => elem.style.display = "none");
	ind.forEach(elem => elem.classList.remove("current"));

	ann[current].style.display = "block";
	img[current].style.display = "block";
	ind[current].classList.add("current");

	clearTimeout(timer);
	timer = setTimeout(() => slide(++current), 5000);
}