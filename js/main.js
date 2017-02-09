//Задача с тремя переменными
var a = 10,
		b = 20,
		c = 30,
		max = 0,
		max2 = 0;
if (a > b){
		if (a > c){
			max = a * 100;
			if (b > c){
				max2 = b * 10;
			} else {
				max2 = c * 10;
			}
		} else {
			max = c * 100;
			max2 = a * 10;
		}
} else {
	if ( b > c){
		max = b * 100;
		if (a > c) {
			max2 = a * 10;
		} else {
			max2 = c * 10;
		}
	} else {
		max = c * 100;
		max2 = b * 10;
	}
}
console.log(max);
console.log(max2);

console.log('Дз 2');

//////////////////////////////////////////////////////////////////////////////////////////
//Задача с четермя переменными

var a = 30,
		b = 20,
		c = 10,
		d = 50,
	 max = 0,
	 max2 = 0,
	 max3 = 0;
if( a > b){
	if ( a > c ){
		if( a > d ){
			max = a * 1000;
			if ( b > c){
				if ( b > d ){
					max2 = b * 100;
					if ( c > d ){
						max3 = c * 10;
					}else{
						max3 = d * 10;
					}
				}else {
					max2 = d * 100;
					max3 = b * 10;
				}
			}else if ( c > d ){
				max2 = c * 100;
				if ( d > b ){
					max3 = d * 10;
				}else{
					max3 = b * 10;
				}
			}else {
				max2 = d * 100;
				max3 = c * 10;
			}
		}else {
			max = d * 1000;
			max2 = a * 100;
			if ( b > c ){
				max3 = b * 10;
			}else {
				max3 = c * 10;
			}
		}
	}else if( c > d ){
		max = c * 1000;
		if ( a > d){
			max2 = a * 100;
			if ( b > d ){
				max3 = b * 10;
			}else {
				max3 = d * 10;
			}
		}else {
			max2 = d * 100;
			max3 = a * 10;
		}
	}else {
		max = d * 1000;
		max2 = c * 100;
		max3 = a * 10;
	}
}else if( b > c ){
	if ( b > d ){
		max = b * 1000;
		if ( c > d ){
			if (c > a ){
				max2 = c * 100;
				if ( a > d ){
					max3 = a * 10;
				}else {
					max3 = d * 10;
				}
			}else{
				max2 = a * 100;
				max3 = c * 10;
			}
		}else if ( d > a ){
			max2 = d * 100;
			if ( c > a ){
				max3 = c * 10;
			}else {
				max3 = a * 10;
			}
		}else {
			max2 = a * 100;
			max3 = d * 10;
		}
	}else{
		max = d * 1000;
		max2 = b * 100;
		if ( a > c ){
			max3 = a * 10;
		}else{
			max3 = c * 10;
		}
	}
}else if ( c > d ){
	max = c * 1000;
	if ( d > b ){
		max2 = d * 100;
		max3 = b * 10;
	}else{
		max2 = b * 100;
		if ( d > a ){
			max3 = d * 10;
		}else{
			max3 = a * 10;
		}
	}
}else {
	max = d * 1000;
	max2 = c * 100;
	max3 = b * 10;
}
console.log(max);
console.log(max2);
console.log(max3);

//////////////////////////////////////////////////////////////////////////////////
//Задача
// 2) есть 2 перменные;
// var m = 10;
// var b = 20;
// поменять значения переменных местами;
// с использованием третьей переменной (и без :) - опционально)
console.log('ДЗ 3'); 

var m = 20;
var x = 30;
var n;
n = m;
m = x;
x = n;
console.log(m);
console.log(x);
///////////////////////////////////////////////////////////////////////////////////////////////
//Создать массив на 30 элементов, все элементы которого
// будут являться случайными числами в диапазоне от 0 до 100;
console.log('Дз 4 и Дз 5');

function rand(min, max) {
    return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}

var arr = [];
var index = -1;
for (var i = 0; i < 30 ; i++){
	var num = rand(0, 100);
	arr.push(num);
}
console.log(arr);

//Насписать скрипт, повторяющий принцип работы метода indexOf
//(в массиве из дз3 ищем, например, число 77, если находим, выводится его индекс. если не находим - выводится -1)
// var index = -1;
// ищем по массиву, если находим, то перезаписываем переменную index
// остaнавливаем цикл
// выводим значение переменной index
var number = 20;
var index = -1;
for (var i = 0; i < arr.length ; i++){
	if ( arr[i] == number){
		index = i;
		break;
	}
}
console.log(index); 