let discussion = {
	novel: function() {
		document.getElementById("main_discussions").innerHTML = `
			<div class="item">
				<a onclick="discussion.back()" class="color-blue"><- Назад</a>
				<h3 class="mt-1">Дискуссии</h3>
				<p>К какой новелле</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto('novel')" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto('novel')" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto('novel')" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto('novel')" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto('novel')" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto('novel')" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<p><a class="color-blue">Загрузить ещё</a></p>
		`;
	},
	comments: function() {
		document.getElementById("main_discussions").innerHTML = `
			<div class="item">
				<a onclick="discussion.back()" class="color-blue"><- Назад</a>
				<h3 class="mt-1">Комментарии</h3>
				<p>К какой новелле</p>
			</div>
			<div class="item">
				<p>1. <a class="color-blue">Автор</a>, время</a></p>
				<p>Содержание комментария</p>
			</div>
			<div class="item">
				<p>2. <a class="color-blue">Автор</a>, время</a></p>
				<p>Содержание комментария</p>
			</div>
			<div class="item">
				<p>3. <a class="color-blue">Автор</a>, время</a></p>
				<p>Содержание комментария</p>
			</div>
			<div class="item">
				<p>4. <a class="color-blue">Автор</a>, время</a></p>
				<p>Содержание комментария</p>
			</div>
			<div class="item">
				<p>5. <a class="color-blue">Автор</a>, время</a></p>
				<p>Содержание комментария</p>
			</div>
			<div class="item">
				<p>6. <a class="color-blue">Автор</a>, время</a></p>
				<p>Содержание комментария</p>
			</div>
			<p><a class="color-blue">Загрузить ещё</a></p>
		`;

	},
	back: function() {
		document.getElementById("main_discussions").innerHTML = `
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<div class="item">
				<p><a onclick="discussion.goto()" class="color-blue">Название дискуссии</a></p>
				<p>Время - краткое содержание - автор</p>
			</div>
			<p><a class="color-blue">Загрузить ещё</a></p>
		`;
	},
	goto: function(word) {
		word = (word == "novel") ? "discussion.novel()" : "discussion.back()";
		document.getElementById("main_discussions").innerHTML = `
			<div class="item">
				<a onclick="${word}" class="color-blue"><- Назад</a>
				<h3 class="mt-1">Дискуссия</h3>
				<p>К какой новелле</p>
				<p>Содержание дискуссии</p>
			</div>
			<div class="item">
				<p>1. <a class="color-blue">Автор</a>, время</p>
				<p>Содержание ответа к дискуссии</p>
			</div>
			<div class="item">
				<p>2. <a class="color-blue">Автор</a>, время</p>
				<p>Содержание ответа к дискуссии</p>
			</div>
			<div class="item">
				<p>3. <a class="color-blue">Автор</a>, время</p>
				<p>Содержание ответа к дискуссии</p>
			</div>
			<div class="item">
				<p>4. <a class="color-blue">Автор</a>, время</p>
				<p>Содержание ответа к дискуссии</p>
			</div>
			<div class="item">
				<p>5. <a class="color-blue">Автор</a>, время</p>
				<p>Содержание ответа к дискуссии</p>
			</div>
			<div class="item">
				<p>6. <a class="color-blue">Автор</a>, время</p>
				<p>Содержание ответа к дискуссии</p>
			</div>
			<p><a class="color-blue">Загрузить ещё</a></p>
		`;
	}
}