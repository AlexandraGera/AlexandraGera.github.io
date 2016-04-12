function raisedToThePower(number,exponent){
	var result=number;
	for (var i=1; i<exponent; i++){
		result *=number;
	}
	return result;
}
var number= prompt('введите число, которое нужно возвести в степень' , '');
if(number <= 1){
	alert('Число ' + number +
		'не поддерживается, введите целое число, большее 1'
		);
} 
if(number >=1){
	var exponent= prompt('в какую степень возвести?', 2);
};
if (exponent <= 1) {
	alert('Степень ' + exponent +
		'не поддерживается, введите целую степень, большую 1'
		);
} else {
	alert( raisedToThePower(number, exponent) );
}
var repeat= confirm("Возвести другое число в степень?");
if (repeat==true){
	var number= prompt('введите число, которое нужно возвести в степень' , '');
	if(number <= 1){
		alert('Число ' + number +
			'не поддерживается, введите целое число, большее 1'
			);
	}
	if(number >=1){
		var exponent= prompt('в какую степень возвести?', 2);
	};
	if (exponent <= 1) {
		alert('Степень ' + exponent +
			'не поддерживается, введите целую степень, большую 1'
			);
	} else {
		alert( raisedToThePower(number, exponent) );
	}
}

var arrayName = []; 

for(var i=0;i < 5;i++)
{
	arrayName[i] = prompt('Введите любое имя['+i+']','Сергей'); 
}

console.log(arrayName);

var name= prompt('Введите имя пользователя','');
var arrayNameLength = arrayName.length
var nameCheck;

for(var i=0;i < arrayNameLength;i++){
	if (arrayName[i] == name){
		nameCheck = true;
	}
};

if (nameCheck == true) {
	alert(name + ', Вы успешно вошли');
} else
{
	alert('К сожалению такого пользователя не существует :(')
};