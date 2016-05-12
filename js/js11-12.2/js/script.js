$(function() {
	var html = $('#it_is_me').html();
	var info = [	
	{
		title:'Геращенко Александра Александровна',
		photo:'img/me.jpg',
		paragraph:'Не работаю. Учусь на курсе GoForIT Frontend.'
	},
	{
		paragraph:'Хочу учить фронтенд, потому что:',
		list1:'мне нравится писать код;',
		list2:'в будущем, это работа с умными и интересными людьми;',
		list3:'результат своей деятельности можно видеть в довольно короткие сроки;'
	},
	{
		paragraph1:'Мои контактные номера телефонов:<br><span>+380-99-16-19-333<br>+380-93-100-52-83</span>',
		paragraph2:'Мой профиль вконтакте: <br>',
		linkHref:'"https://vk.com/tiranya"',
		linkName:'VK'
	},
	{
		paragraph:'Мой фидбек:<br>Спасибо за возможность обучаться. Обещаю быть хорошим студентом.'
	}		
	];

	var content = tmpl(html, {
		data: info
	});
	$('body').append(content);
});