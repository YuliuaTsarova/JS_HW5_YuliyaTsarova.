// Домашняя работа No6. Дата и время. Математические ф-ции. Работа со
// строками. Регулярные выражения.
// Используя полученные знания выполните сл. задания:

// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

console.log('%cTask1 -------------------------', 'color: white; background: #212529; font-size: 10px');
{
    let str = 'aaa@bbb@ccc';
    let newStr = str.replace(/@/g, '!',);
    console.log(str);
    console.log(newStr);
}

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

console.log('%cTask2 -------------------------', 'color: white; background: #212529; font-size: 10px');
{
    let date = '2025-12-31.';
    console.log(date);
    console.log(date.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1'))
}

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

console.log('%cTask3 -------------------------', 'color: white; background: #212529; font-size: 10px');
{
    let str = 'Я учу javascript';
    console.log(str.substring(2, 16));
    console.log(str.substr(2, 16));
    console.log(str.slice(2, 16));
}

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

console.log('%cTask4 -------------------------', 'color: white; background: #212529; font-size: 10px');
{
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    console.log(Math.sqrt(sum).toFixed(3));
}

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

console.log('%cTask5 -------------------------', 'color: white; background: #212529; font-size: 10px');

{
    function count(a, b) {
        let c = a - b;
        return Math.abs(c);
    }
    console.log(count(3, 5));
    console.log(count(6, 1));
}

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

console.log('%cTask6 -------------------------', 'color: white; background: #212529; font-size: 10px');

{
    let date = new Date();

    console.log(date.toLocaleTimeString('ru') + ` ` + date.toLocaleDateString('ru') + `.`)

    //зачем писать эту функцию не поняла. Определяет же под капотом ↑ я так поняла.

    function format(num) {
        if (num > 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }
    // для проверки
    // date.setDate(1); // меняет дату
    // date.setMonth(7); // меняет месяц
    // date.setHours(2); // меняет часы
    // date.setMinutes(3); //меняет минуты
    // date.setSeconds(3); //меняет секунды
    console.log(format(date.getHours()) + ':' + format(date.getMinutes()) + ':' + format(date.getSeconds()) + ' ' + format(date.getDate()) + '.' + format(date.getMonth() + 1) + '.' + date.getFullYear() + `.`);

}

// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

console.log('%cTask7 -------------------------', 'color: white; background: #212529; font-size: 10px');

{
    let str = 'aa aba abba abbba abca abea';
    console.log(str.match(/ab+a/gi));
}

// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.

console.log('%cTask8 -------------------------', 'color: white; background: #212529; font-size: 10px');

{
    let tel = "+375(29)5896245";
    let tel2 = "+375295632569"
    let tel3 = "+375-29-5632569"
    let tel4 = "+375-029-56352569"
    let tel5 = "375-029-5632569"
    const phone = /^(\+)?[0-9]{1,3}\(|-\d{2,3}\)|-\d{7}$/;
    
    console.log(phone.test(tel));
    console.log(phone.test(tel2));
    console.log(phone.test(tel3));
    console.log(phone.test(tel4));
    console.log(phone.test(tel5));
}

// 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия:
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов.
// Функция должна возвращать true или false. Используйте регулярные
// выражения.

console.log('%cTask9 -------------------------', 'color: white; background: #212529; font-size: 10px');
{
    function checkEmail(email) {
        let m = /^[\w]{2}[\w-\.]*@[\w-]+\.[a-z]{2,11}$/i;
        let check = m.test(email);
        console.log(check);
    }
   checkEmail(prompt('Введите электронный адрес'));
}

// 10. Напишите ф-цию, которая из полного адреса с параметрами и без,
// например: https://tech.onliner.by/2018/04/26/smart-do-200/?
// utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
// доменного имени (https://tech.onliner.by), остальную часть адреса без
// параметров (/2018/04/26/smart-do-200/), параметры
// (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
// может и не быть каких-либо составляющих. Ф-ция должна возвращать
// массив.

// * Для быстрого составления регулярного выражения и проверки исп. онлайн-
// сервис https://regex101.com/.

// Для ввода значений можете использовать ф-цию prompt(), либо задавать
// значения при инициализации переменных в коде.
// Для вывода результатов скриптов вы можете использовать функции: alert()
// для вывода всплывающего окна; console.log() для вывода в консоль браузера;
// document.write() для вывода в «тело» HTML-документа.