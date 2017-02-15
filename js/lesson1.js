function rand(startNum, endNum) {
  return Math.floor(startNum + Math.random() * ((endNum + 1) - startNum));
}
// var arrLength = 10;
// var arr = [];
// for (var i = 0; i < arrLength; i++){
// 	arr[i] = [];
// 	for (var j = 0; j < arrLength; j++){
// 		//arr[i][j] = rand( 0, 100 );
// 		var num = randomNum( 0, 100 );
// 		arr[i].push( num );
// 	}

// }
// console.table(arr);

// ДЗ
// Получить результирующий массив, состоящий из элементов, лежащих на гранях матрицы, размером 10 на 10 элементов. Либо «обойти массив по периметру».
// Обходить массив по часовой стрелке от точки 0-0

var matrix = [];
var MIN_RANDOM_VALUE = 0;
var MAX_RANDOM_VALUE = 100;
for (var i = 0; i < 10; i++) {
	matrix[i] = []; //создаем в matrix 10 пустых массива
	for (var j = 0; j < 10; j++) {
		var num = rand(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);
		matrix[i][j] = num; //заполнчем каждый массив случайными числами
	}
}
console.table(matrix);

var matrixTop = [],
	matrixLeft = [],
	matrixBottom = [],
	matrixRight = [],
	matrixMax = [];

for (var i = 0; i < matrix.length; i++) {
	var a = matrix[0][i];
	matrixTop.push(a);
}
console.log(matrixTop);

for (var j = 1; j < matrix.length - 1; j++) {
	var b = matrix[j][matrix.length - 1];
	matrixRight.push(b);
}
console.log(matrixRight);

for (var k = 0; k < matrix.length; k++) {
	var c = matrix[matrix.length - 1][k];
	matrixBottom.push(c);
}
matrixBottom.reverse();
console.log(matrixBottom);

for (var y = 1; y < matrix.length - 1; y++) {
	var d = matrix[y][0];
	matrixLeft.push(d);
}
matrixLeft.reverse();
console.log(matrixLeft);

matrixMax = matrixTop.concat(matrixRight.concat(matrixBottom.concat(matrixLeft)));

console.log(matrixMax);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// /////////////////////////////////////////////////////////////////////////
// ДЗ2
// … против часовой стрелки от точки 0-0
console.log('ДЗ2')
var matrixRevLeft = [];
var matrixRevBottom = [];
var matrixRevRight = [];
var matrixRevTop = [];
var matrixRev_Max = [];
for (var i = 0; i < matrix.length; i++) {
	var e = matrix[i][0];
	matrixRevLeft.push(e);
}
console.log(matrixRevLeft);

for (var j = 1; j < matrix.length - 1; j++) {
	var f = matrix[matrix.length - 1][j];
	matrixRevBottom.push(f);
}
console.log(matrixRevBottom);

for (var k = matrix.length - 1; k >= 0; k--) {
	var g = matrix[k][matrix.length - 1];
	matrixRevRight.push(g);
}
console.log(matrixRevRight);

for (var c = matrix.length - 2; c > 0; c--) {
	var h = matrix[0][c];
	matrixRevTop.push(h);
}
console.log(matrixRevTop);
matrixRev_Max = matrixRevLeft.concat(matrixRevBottom.concat(matrixRevRight.concat(matrixRevTop)));

console.log(matrixRev_Max);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
/////////////////////////////////////////////////////////////////////////////
// ДЗ3
// … периметр треугольника, образованного двумя сторонами матрицы и главной диагональю. от точки 0-0 по часовой стрелке
console.log('ДЗ3')
var matrixTr_top = [];
var matrixTr_right = [];
var matrixTr_diagonal = [];
var matrixTr_max = [];
for (var i = 0; i < matrix.length; i++) {
	var m = matrix[0][i];
	matrixTr_top.push(m);
}
console.log(matrixTr_top);

for (var i = 1; i < matrix.length; i++) {
	var n = matrix[i][matrix.length - 1];
	matrixTr_right.push(n);
}
console.log(matrixTr_right);

for (var i = 1; i < matrix.length - 1; i++) {
	var p = matrix[i][i];
	matrixTr_diagonal.push(p);
}
matrixTr_diagonal.reverse();
console.log(matrixTr_diagonal);
var matrixTr_max = matrixTr_top.concat(matrixTr_right.concat(matrixTr_diagonal));

console.log(matrixTr_max);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
////////////////////////////////////////////////////////////////////////////////////////
// ДЗ4
// … периметр треугольника, образованного двумя сторонами матрицы и побочной диагональю. от точки 0-9 против часовой стрелки
console.log('ДЗ4')
var matrixTr2_left = [],
		matrixTr2_bottom = [],
		matrizTr2_diagonal = [],
		matrixTr2_max = [];

for ( var i = 0; i < matrix.length; i++ ){
	var s = matrix[i][0];
	matrixTr2_left.push(s);
}
console.log( matrixTr2_left );

for (var i = 1; i < matrix.length; i++ ){
	var m = matrix[matrix.length - 1 ][i];
	matrixTr2_bottom.push( m );
}
console.log( matrixTr2_bottom );

for ( var i = 1; i < matrix.length - 1; i++ ){
	var f = matrix[i][i];
	matrizTr2_diagonal.push( f );
}
matrizTr2_diagonal.reverse();
console.log( matrizTr2_diagonal );

matrixTr2_max = matrixTr2_left.concat( matrixTr2_bottom.concat( matrizTr2_diagonal ));
console.log( matrixTr2_max );
