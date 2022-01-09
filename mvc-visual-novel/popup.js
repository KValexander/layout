// Popup
let popup = {
	html: null,
	close: () => popup.html.querySelector(".close div").onclick = () => popup.html.innerHTML = "",
	// Image
	image: function(src) {
		popup.html.innerHTML = "";
		popup.html.innerHTML = `
			<!-- Mask -->
			<div class="mask"></div>
			<!-- Popup content -->
			<div class="popup">
				<div class="popup_image">
					<div class="close"><div></div></div>
					<img src="${src}" alt="">
				</div>
			</div>
		`;
		popup.close();
	},
	// Login, Register
	auth: function(type) {
		popup.html.innerHTML = "";
		popup.html.innerHTML = `
			<div class="mask"></div>
			<div class="popup">
				<div class="popup_auth">
					<div class="login">
					</div>
					<div class="register">
					</div>
				</div>
			</div>
		`;
		active = document.querySelector("#popup ." + type);
		if(type == "login") switches = document.querySelector("#popup .register");
		else if(type == "register")  switches = document.querySelector("#popup .login");

		elem = document.querySelector("#popup ."+type);
		elem.classList.add("active");
		switches.classList.add("switches");
		
		if(type=="login") {
			elem.innerHTML = `
				<h2 class="mb-2">Вход</h2>
				<input type="text" placeholder="Логин">
				<input type="text" placeholder="Пароль">
				<p class="right"><a>Забыли пароль?</a></p>
				<button>Войти</button>
			`;
			switches.innerHTML = `
				<div class="close"><div></div></div>
				<div class="switch" onclick="popup.auth('register')"></div>
			`;
		} else if (type == "register") {
			elem.innerHTML = `
				<h2 class="mb-2">Регистрация</h2>
				<input type="text" placeholder="Имя пользователя">
				<input type="text" placeholder="Почта">
				<input type="text" placeholder="Логин">
				<input type="password" placeholder="Пароль">
				<input type="password" placeholder="Подтверждение пароля">
				<button>Зарегистрироваться</button>
			`;
			switches.innerHTML = `
				<div class="close"><div></div></div>
				<div class="switch" onclick="popup.auth('login')"></div>
			`;
		}
		popup.close();
	},
}; window.addEventListener("DOMContentLoaded", () => popup.html = document.getElementById("popup"));