let popup = {
	image: function(src) {
		console.log(src);
		document.getElementById("additional").innerHTML = "";
		document.getElementById("additional").innerHTML = `
			<!-- Mask -->
			<div class="mask">
				<div class="popup popup_image">
					<div class="close"><div></div></div>
					<img src="${src}" alt="">
				</div>
			</div>
		`;
		document.querySelector("#additional .close").onclick = function() {
			document.getElementById("additional").innerHTML = "";
		}
	},
	auth: function(type) {

	}	
};