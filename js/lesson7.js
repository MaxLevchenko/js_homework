//Написать скрипт, который возвращает true,
// если искомый класс присутствует в элементе,
// и false - если отсутствует.

/*var elem = document.getElementsByClassName('main');
var str = elem[0].className.split(' ');
function elemTestClass(classN) {
	for(var i = 0; i < str.length; i++){
		if(str[i] === classN){
			return true;
		}
	};return false;

};*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//Задача 2
/*С помощью изученного в статье материала создать таблицу размером 10 на 10 элементов.
 Заполнить либо случайными числами,
  либо пустотой (указав хардкодно размеры ячейки, например 10 на 10 пикселей)*/

function rand(startNum, endNum) {
	return Math.floor(startNum + Math.random() * ((endNum + 1) - startNum));
}

var parentElem = document.body;

var newTable = document.createElement('table');
parentElem.insertBefore(newTable, parentElem.firstChild);
newTable.classList.add('tab1');

for (var i = 0; i < 10; i++) {
	var tr = document.createElement('tr');
	newTable.appendChild(tr);
	for (var j = 0; j < 10; j++) {
		var td = document.createElement('td');
		td.innerHTML = rand(0, 100);
		tr.appendChild(td);
	};
};
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// С помощью innerHTML
document.body.innerHTML = '<table>';
document.body.children[0].innerHTML = '<tbody>';
for (var i = 0; i < 10; i++) {
	document.body.children[0].children[0].innerHTML += '<tr>';
	for (var j = 0; j < 10; j++) {
		document.body.children[0].children[0].children[i].innerHTML += '<td>';
		document.body.children[0].children[0].children[i].children[j].innerHTML = rand(0, 100);
	};
};