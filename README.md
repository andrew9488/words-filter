# Тестовое задание Масштабные решения

[Посмотреть реализацию](https://andrew9488.github.io/MrSoft-test-tasks)

## Сделать страницу, на которой будет:

1. поле для ввода;
2. checkbox;
3. две кнопки;
4. место для вывода данных.

Одна кнопка - фильтр по длине слов, вторая кнопка - фильтр по подстроке. Checkbox отвечает за чувствительность регистра поиска.

При вводе в поле числа и клике по кнопке фильтра по длине слов в место для вывода данных выводятся строки с длиной строки больше введенного числа.

При вводе строки в поле и клике по кнопке фильтра по подстроке в место для вывода данных выводятся строки, которые содержат введенную подстроку.

Если checkbox чувствительности регистра проставлен, строки сравниваются с учетом регистра ('aAa' не равно 'aaa'). Если checkbox снят, строки сравниваются без учета регистра ('aAa' равно 'aaa').

Данные берутся HTTP запросом по адресу http://www.mrsoft.by/data.json, из поля data полученного объекта. Файл со временем не меняется.

