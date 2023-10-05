// ------------------------------ ФУНКЦИИ --------------------------------

function info(word) { // Создание функции
  console.log("Hello");
  console.log("!");
  console.log(word + "!");
}

info("Hello"); // Вывод функции

function summ(a, b) {
  var res = a + b;
  console.log(res);
}

summ(5, 7);

// Пример, функция для подсчета суммы чисел

function summa(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i ++)
    sum += arr[i];
  console.log(sum);
}
var array = [6, 8, 1];

summa(array);

// return ----------------
// локальные и глобальные переменные -------------------
