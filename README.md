# Проста збірка Gulp
Відслідковує файли *.less *.js компілює, очишкає, мініфіковує, перейменовує і складає в папки
>.dist/css/main.min.css
>
>.dist/js/main.min.js

## Структура каталогів розташування файлів
>.src/less/\*\*/*.less
>
>.src/js/\*\*/*.js

## Інструкція:
1. Скачати файли в любудиректорію
2. Ввести команду: npm i (має бути встановлений node.js)
3. Виконати команду: gulp (запуск таска default)
4. Писати код і насолоджуватись

## Посилання
https://github.com/bob308/Gulp_Starter_1  

## Використані npm пакети
[gulp](https://www.npmjs.com/package/gulp) Збірка Gulp  
[gulp-less](https://www.npmjs.com/package/gulp-less) Компіляція Less файлів  
[gulp-babel](https://www.npmjs.com/package/gulp-babel) Ковертація Java Script в старий стандарт  
[gulp-concat](https://www.npmjs.com/package/gulp-concat) Обєднання декількох файлів в один  
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Мініфікація і оптимізація Java Script коду  
[gulp-rename](https://www.npmjs.com/package/gulp-rename) Перейменування файлу  
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Мініфікація і оптимізація CSS файлів  
[del](https://www.npmjs.com/package/del) Видалення каталогів і файлів  
