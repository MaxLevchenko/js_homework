/* ДЗ1 */
/*
    Написать электронные часы,
    которые в консоли выводят раз в секунду
    время в формате 23:59
  3:4 - плохо
  03:04 - хорошо
  подсказка - очищать консоль можно командой console.clear()
 */
//1- й вариант
function hours(hour, min, second) {
	function hoursMin() {
		if (second < 10 && min < 10) {
			console.clear();
			console.log(hour + ':' + '0' + min + ':' + '0' + second);
			second++;
		} else if (second >= 10 && min < 10 && second < 60) {
			console.clear();
			console.log(hour + ':' + '0' + min + ':' + second);
			second++;
		} else if (second < 10 && min >= 10 && min < 60) {
			console.clear();
			console.log(hour + ':' + min + ':' + '0' + second);
			second++;
		} else if (second >= 10 && min >= 10 && second < 60 && min < 60) {
			console.clear();
			console.log(hour + ':' + min + ':' + second);
			second++;
		} else if (hour < 24 && min < 60 && second < 60) {

			console.clear();
			console.log(hour + ':' + min + ':' + second++);

		} else if (min < 60) {
			min++;
			second = 0;
		} else if (hour < 23) {
			hour++;
			min = 0;
			second = 0;
		} else {
			hour = 0;
			min = 0;
			second = 0;
		}
	};
	return hoursMin;
};
var a = hours(00, 09, 01);
setInterval(a, 1000);


// 2-й вариант
//Функция выводит текущее время.(Электронные часы)
setInterval(function() {
	console.clear();
	var date = new Date();
	if (date.getSeconds() < 10 && date.getMinutes() < 10) {
		var str = date.getHours() + ':' + '0' + date.getMinutes() + ':' + '0' + date.getSeconds();
	} else if (date.getMinutes() < 10 && date.getSeconds() >= 10) {
		var str = date.getHours() + ':' + '0' + date.getMinutes() + ':' + date.getSeconds();
	} else if (date.getMinutes() >= 10 && date.getSeconds() < 10) {
		var str = date.getHours() + ':' + date.getMinutes() + ':' + '0' + date.getSeconds();
	} else {
		var str = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	}
	console.log(str);
}, 1000);

/* ДЗ2 */
/*
 Написать программу-бомбу, которая будет отсчитывать 10 секунд в обратном порядке,
 отображая, оставшееся время в консоли браузера.
 по истечении времени будет выводиться alert с текстом BOOOM.
 После "взрыва" счетчик должен остановиться.
 */

function bomb(second) {
	function counterTime() {
		if (second > 0) {
			console.clear();
			console.log(second)
			second--;
		} else if (second == 0) {
			console.clear();
			console.log('%c' + 'BOOOM', ' background-color:red; padding:10px 10px; color:white; font-weight:bold; border-radius:4px; font-size:20px;');
			clearInterval(id);
		};
	}
	return counterTime;
}
var a = bomb(10);
var id = setInterval(a, 1000);

// исправить существующий код таким образом, чтобы
//   console.log выводила корректное значение переменной i

for (var i = 1; i <= 10; i++) {
	(function firstFunction(i) {
		setTimeout(function() {
			console.log(i);
		}, 1000 * i)
	})(i);
};