function raisedToThePower(){
	var namber= prompt('введите число, которое нужно возвести в степень' , '');
	var exponent= prompt('в какую степень возвести?', 2);

	var result=(Math.pow (namber, exponent));

	console.log(result);
	alert(result);

	var repeat= confirm("Возвести другое число в степень?");
	if (repeat==true){
		raisedToThePower();
	}
}

raisedToThePower();

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