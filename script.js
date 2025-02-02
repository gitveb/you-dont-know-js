const books = document.querySelectorAll('.book')
const bg = document.querySelector('body')
const title = document.querySelectorAll('a')
const adv = document.querySelector('.adv')
const ul = document.querySelectorAll('ul')
const li = document.querySelectorAll('li')

// Восстановить порядок книг.



books[0].before(books[1])
books[4].after(books[3])
books[5].after(books[2])
console.log(books)

// Заменить картинку заднего фона на другую из папки image
bg.style.backgroundImage = 'url(./image/adv.jpg)';

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
title[4].textContent = 'Книга 3. this и Прототипы Объектов'
console.log(title)
// Удалить рекламу со страницы
adv.remove()

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
li[9].after(li[2])
li[3].after(li[6])
li[4].before(li[8])

li[49].before(li[55])
li[52].before(li[48])
li[54].before(li[51])

console.log(ul)
console.log(li)

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const newLi = document.createElement('li')
newLi.textContent = 'Глава 8: За пределами ES6'
ul[2].append(newLi)
li[25].after(newLi)
console.log(newLi)
