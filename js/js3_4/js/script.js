var test={
	create: function(param){
		var element= document.createElement(param.tag);

		if (param.attribute){
			element.setAttribute('type' , param.attribute);
		}
		if (param.class){
			element.classList.add(param.class);
		}
		if (param.class2){
			element.classList.add(param.class2);
		}
		if (param.class3){
			element.classList.add(param.class3);
		}
		if (param.text){
			element.innerHTML=param.text;
		}
		if (param.parent){
			param.parent.appendChild(element);
		}
		return element;
	},

	createAnswer: function(quantityHeader,quantityAnswer){
		for (var i=0; i<quantityHeader; i++) {
			this.create({
				tag: 'h3',
				text: (i+1) +'. Вопрос №'+(i+1),
				parent: testForm
			});

			for (var j=0; j<quantityAnswer; j++) {
				var labelForm = 
				this.create({
					tag: 'label',
					text: 'Вариант ответа '+(j+1),
					class: 'checkbox',
					parent: testForm
				});

				var checkboxLabel = 
				this.create({
					tag: 'input',
					attribute: 'checkbox'
				});
				labelForm.insertAdjacentElement('afterBegin', checkboxLabel);
			}
		};
	}
}

var body = document.querySelector('body');
test.create({
	tag:'div',
	class: 'row',
	class2: 'text-center',
	parent: body
})

var row = document.querySelector('.row');
test.create({
	tag:'div',
	class:"wrapper",
	class2:"col-md-6",
	class3:"col-md-offset-3",
	parent: row
})

var wrapper = document.querySelector('.wrapper');
test.create({
	tag:'h1',
	text:'Тест по программированию',
	parent: wrapper
})

var testForm=
test.create({
	tag:'form',
	parent: wrapper
});

test.createAnswer(3,3);

var buttonForm=
test.create({
	tag:'button',
	class: 'btn',
	class2:'btn-primary',
	class3:'btn-lg',
	attribute: 'submit',
	text:'Проверить мои результаты',
	parent: wrapper
});