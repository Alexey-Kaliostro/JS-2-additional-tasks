//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-1");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*

Задание
Запиши условие в инструкции if так, чтобы функция работала правильно.

Тесты
Объявлена функция checkAge(age).
В выражении проверки возраста использован оператор >=.
Вызов checkAge(20) возвращает 'Вы совершеннолетний человек'.
Вызов checkAge(8) возвращает 'Вы не совершеннолетний человек'.
Вызов checkAge(14) возвращает 'Вы не совершеннолетний человек'.
Вызов checkAge(38) возвращает 'Вы совершеннолетний человек'.

*/

// Task START

function checkAge(age) {
  if (age >= 18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");