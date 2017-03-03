//Функия  которая для данного x вычисляет сумму чисел от 1 до x,
function firsFunction(x){
		if(x > 0){
			return x + firsFunction(x - 1)
		}
		return x;
}
//Факториал
//Задача – написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.
function  factorial(n){
	if (n != 1){
		return n * factorial(n-1);
	}
	return n;
}



//числа Фибоначчи
//Функция которая возвращает n-е число Фибоначчи.
function fab(m){
	if(m > 1 ){
		return m = fab(m-1)+fab(m-2);
	}
	return m;
}