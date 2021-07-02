/* 
1.DOM seleciton
2.Event Listener
3.Basic Validation
4.Create table body
5.append

*/
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const booklist = document.querySelector('#book-list');


btn.addEventListener('click', function (e) {

    e.preventDefault();
    if (title.value == '' && author.value == '' && year.value == '') {
        alert("not valid")
    }
    else {
        const newRow = document.createElement('tr');
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        booklist.appendChild(newRow);
        title.value = "";
        author.value = "";
        year.value = "";
    }
})