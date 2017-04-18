//Задача.
/*Используя ТОЛЬКО средства джаваскрипт, реализовать выпадающее меню 
(НЕ select, а нечто, похожее на него визуально), состоящее из следующих элементов:
- кнопка, содержащая текст
- список ul-li, скрытый по-умолчанию

Клик на кнопке открывает список.
Клик по эл-ту списка закрывает список и текст выбранного элемента копирует в кнопку.
Клик ВНЕ открытого списка закрывает список, если он открыт (window.onclick).*/

var button = document.createElement('button');
button.textContent = 'menu';
button.style.width = '100px';
button.style.background = 'red';
document.body.appendChild(button);

var ul = document.createElement('ul');
ul.id = 'list';
ul.style.width = '96px';
ul.style.background = 'red';
ul.style.webkitPaddingStart = '0px';
ul.style.margin = '0px';
ul.style.border = '2px outset buttonface';
for (var i = 1; i <= 10; i++) {
	var li = document.createElement('li');
	li.textContent = 'text ' + i;
	li.style.cursor = 'pointer';
	li.style.textAlign = 'center';
	ul.appendChild(li);
};
document.body.appendChild(ul);
var list = document.getElementById('list');
list.hidden = true;

button.onclick = function() {
	list.hidden = false;
};

var elem = document.getElementsByTagName('li');
for (var i = 0; i < elem.length; i++) {
	elem[i].onclick = function() {
		list.hidden = true;
		button.textContent = this.innerHTML;
	};
};