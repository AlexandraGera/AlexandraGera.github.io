//возведение в степень
function raisedToThePower(number,exponent){
	var result=number;
	if (exponent==0){
		result=1;
		return result;
	};
	if (exponent<0){
		exponent=exponent*-1;
		for (var i=1; i<exponent; i++){
			result *=number;
		};
		var negativeExponentResult=1/result;
		return negativeExponentResult;
	}else{
		for (var i=1; i<exponent; i++){
			result *=number;
		};
		return result;
	}

};
var number= prompt('Введите целое число, которое нужно возвести в степень' , '');
var exponent= prompt('В какую степень возвести? (любое целое число)', 2);
alert( raisedToThePower(number, exponent) );

var repeat= confirm("Возвести другое число в степень?");
if (repeat==true){
	var number= prompt('Введите целое число, которое нужно возвести в степень' , '');
	var exponent= prompt('В какую степень возвести? (любое целое число)', 2);
	alert( raisedToThePower(number, exponent) );
};


//Работа с массивом
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