let fs = require("fs");//переменная fs- объект для работы с файловой системой
let arg = process.argv;//Объект для работы с аргументами командной строки
// todo: обработка ошибок в try catch
let Alph = new Array();// объект типа "массив".В JS индексы могут быть не только числовые,
let inputData = fs.readFileSync(arg[2]);// байтовый буфер
let Entropy = 0;//Переменная где мы будем содержать энтропию файловой стройки
inputData = inputData.toString();// преобразование байтового буфера в строку
for (let i = 0; i < inputData.length; i++) {// Инициализация массива Alph
    Alph[inputData.charAt(i)] = 0;
}
//Результатом инициализации ключами в массива alph являются все различные массивы алфавита, со значениями 0
//Считаем число повторов букв
let counter = 0;
for (let i = 0; i < inputData.length; i++) {
    Alph[inputData.charAt(i)] += 1;
    counter += 1;
}
//todo: прочитать и понять,почему длинна массива Alph равна нулю.Длина определяется последним числовым индексом
/*for (let i=0;i<Alph.length;i++){
    Alph[i]/=inputData.length;
}*/ //Будет работать но неправильно <---
for (i in Alph) {
    Alph[i] /= inputData.length;
}
for (i in Alph) {
    Entropy -= Alph[i] * (Math.log(Alph[i]) / Math.log(counter));
}
console.log(Entropy)
