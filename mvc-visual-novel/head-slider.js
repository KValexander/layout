let head_slider = {
	timer: null,
	init: function() {
		document.querySelectorAll(".head-slider .indicator").forEach((elem, i) =>  elem.addEventListener("click", () => head_slider.slide(i)));
		head_slider.slide(0);
	},
	slide: function(current) {
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

		clearTimeout(head_slider.timer);
		head_slider.timer = setTimeout(() => head_slider.slide(++current), 10000);
	}
};

document.addEventListener("DOMContentLoaded", head_slider.init);