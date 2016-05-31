requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'template': {
			exports: 'template'
		}
	}
});

require (
	[
	'model',
	'view',
	'controller',
	'jquery'
	],
	function(Model, View, Controller, $) {
		var firstToDoList=['Написать план',  'Изменить один пункт плана','Выполнить первый пункт плана', 'Удалить выполненный пункт'];
		var model= new Model(firstToDoList);
		var view= new View(model);
		var controller= new Controller(model, view);
	}
	);