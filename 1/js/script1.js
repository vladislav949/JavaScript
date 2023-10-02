// --------------------------------------------------------- УСЛОВНЫЕ ОПЕРАТОРЫ

/*
Условные конструкции позволяют проверить некое выражение и в зависимости от
его результата выполнить необходимый код.

Условные операторы очень важны, ведь они позволяют выполнять разный код в
зависимости от исхода условия. В языке JavaScript существует три конструкции
позволяющих осуществлять проверку.

Конструкция if - else:
За счёт if else можно проверить одно или несколько условий и в случае
их успешной проверки будет выполнен один, иначе другой.
*/

var number = 15;
/* условие - если 5 будет равным значению 5, в таком случае буду выполнять
следующий код: если 5=5, то все ОК
if(5 == 5) {
  console.log("OK");
} */

if(number != 15) { // Если переменная не равна 15,
  console.log("OK"); // тогда будет выполнен этот код.
} else { // else пишеться в конце и не может быть без оператора if,
  // выполняется в любом случае, если первое условие не верно.
  console.log("Error"); // если переменная равна 15, будет выведено else(Error).
} // В данном случае выполнено условие else (number = 15). Если (number != 15)
// было бы выполнено первое условие (OK) и else проигнорировано.

if(number != 15) {
  console.log("number не равно 15");
} else if(number < 10) {
  console.log("number меньше 10");
} else if(number == 7) {
  console.log("number равно 7");
} else if(number >= 15) {
  console.log("number больше или равно 15"); // сработает это условие
} else {
  console.log("Else!");
} // Если код занимает одну строку {}-скобки можно убрать.
  // else в конце прописывать не обязательно.

// ---- Проверка нескольких условий сразу:

var number1 = 15;
var bool = true;

if(number1 == 5 || bool == true) { // (||)- условие number1 (или) bool.
  console.log("Условие number1 или bool выполнено");
} else if(number1 == 15 && bool == true) { // (&&)-и
  console.log("Условия number1 и bool выполнены");
} else if(number1 == 15 && bool) { // boll сокращенно от (bool == true)
  // чтобы проверить на значение false можно просто записать !bool
  console.log("Условия number1 и bool выполнены");
}
// --------------------------------------

//---- оператор switch-case

/* Конструкция case обладает более удобным форматом для проверки множественных
условий на совпадение значения. В конструкцию записывается переменная, что
проверяется, а также значения на которые происходит проверка. */

var stroka = "text";

switch(stroka) {
  case "4": // case случай
    console.log("Переменная со значением 4");
    break;
  case "45":
    console.log("Переменная со значением 45");
    break;
  case "text":
    console.log("Переменная со значением «text»"); // правильное значение
    break;
  default: // выполняется если все выше не подошли
    console.log("Default");
}

// -------------------------------- Массивы данных. Одномерные и многомерные.
/* Массивы позволяют хранить большой объем информации в одном месте.
В языке JavaScript можно найти несколько основных типов массивов

Одномерный массив состоит из нескольких элементов, объединенных под одним именем.
Чтобы создать массив необходимо создать переменную и присвоить ей значение
new Array(). Внутри вы можете через запятую записывать различные значения,
которые и будут элементами массива.

Многомерный массив - это массив, в котором каждый элемент является другим массивом.
На практике очень редко используются массивы с более чем третим уровнем вложенности.
То есть массивы, в которых все элементы являются другими массивами и в котором
все элементы также другие массивы встречаются очень и очень редко на практике.
*/

// var arr = new Array(1, 2); либо проще var arr = [1, 2]; (array-массив)
var arr = [5, true, "stroka", 5.7, 0, -100];
// Отсчет индексов начинается с нуля (у 5 индекс 0)
console.log(arr);
console.log(arr[0]); // вывод индекса 0 (число 5)
arr[3] = "text"; // изменение значения для 3 индекса.
console.log(arr.length); // Вывести длину массива (кол-во элементов)

// Многомерные массивы ---------

var matrix = [
  [5, 2.2, true], ["stroka", 5, 22], [0, -5]
];

matrix[1][0] = 90; // вывести массив с индексом 1 и элемент в этом массиве с
console.log(matrix); // индексом 0 (stroka) и заменить на значение 90
