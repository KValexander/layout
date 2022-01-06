let discussion = {
	back: function() {
		document.getElementById("main_discussions").innerHTML = `
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-dark">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-dark">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-dark">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-dark">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-dark">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-dark">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<p><a class="color-dark">Загрузить ещё</a></p>
		`;
	},
	goto: function() {
		document.getElementById("main_discussions").innerHTML = `
			<div class="item">
				<a onclick="discussion.back()" class="color-dark"><- Назад</a>
				<h3 class="m-1-0">Дискуссия</h3>
				<p>К какой новелле</p>
				<p>Содержание дискуссии</p>
			</div>
			<div class="item">
				<p>0. Кто, когда</p>
				<p>Ответ ответ ответ ответ ответ</p>
			</div>
			<div class="item">
				<p>1. Кто, когда</p>
				<p>Ответ</p>
			</div>
			<div class="item">
				<p>3. Кто, когда</p>
				<p>Ответ ответ ответ ответ ответ</p>
			</div>
			<div class="item">
				<p>4. Кто, когда</p>
				<p>Ответ</p>
			</div>
			<div class="item">
				<p>5. Кто, когда</p>
				<p>Ответ ответ ответ ответ ответ</p>
			</div>
			<div class="item">
				<p>6. Кто, когда</p>
				<p>Ответ</p>
			</div>
			<div class="item">
				<p>7. Кто, когда</p>
				<p>Ответ ответ ответ ответ ответ</p>
			</div>
			<div class="item">
				<p>8. Кто, когда</p>
				<p>Ответ</p>
			</div>
			<div class="item">
				<p>9. Кто, когда</p>
				<p>Ответ ответ ответ ответ ответ</p>
			</div>
		`;
	}
}