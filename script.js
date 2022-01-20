function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
let books = [];

const add = document.querySelector('.nav-toggle');
const formInput = document.querySelector('.input');
const start = document.querySelector('.start');
const cancel = document.querySelector('#button_cancel');
const addBook = document.querySelector('#button_addbook');
const info = document.querySelector('.info');
const booksContainer = document.querySelector('.books')
const bookShelf = document.querySelector('.container');

const addEventBook = (rootElement, event) => {
    rootElement.addEventListener(event, (e) => {
        let targetElement = e.target;
            if (targetElement.matches('.fa-trash-alt')) {
                let index = targetElement.parentElement.parentElement.dataset;
                targetElement.parentElement.parentElement.remove();   
                 books.splice(index, 1);
            }  
    }, true)          
}
addEventBook(booksContainer, 'click');

const read = (deleteElement, event) => {
    deleteElement.addEventListener(event, (e) => {
        let targetElement = e.target;
        if (targetElement.matches('.fa-book-reader')){
            let status = targetElement.parentElement.parentElement.children;
            console.log(status[3])
            if(status[3].textContent == 'unread'){
                status[3].textContent = 'read'
                status[3].style.color = 'lightgreen'
            } else if(status[3].textContent == 'read'){
                status[3].textContent = 'unread'
                status[3].style.color = 'red'
            }
        }
    })
}
read(booksContainer, 'click');
add.addEventListener('click', () => {
    formInput.classList.toggle('show')
});

cancel.addEventListener('click', () => {
    formInput.classList.remove('show')
});

addBook.addEventListener('click', Library);

function Library() {
    const inputTitle = document.querySelector('#title').value;
    const inputAuthor = document.querySelector('#author').value;
    const inputPages = document.querySelector('#pages').value;
    const inputRead = document.querySelector('#label').value;

    let book = new Book(inputTitle, inputAuthor, inputPages, inputRead)
    books.push(book);
    console.log(book);
    formInput.classList.toggle('show');
    removeHTML()
    createHTML();
};



function removeHTML() {
    const boxes = document.querySelectorAll('.card')
    boxes.forEach(card => {
        card.remove();
    })
}


function createHTML() {
    let i = 0;
    books.forEach((book) => {
        const container = document.querySelector('.container')
        const bookCard = document.createElement('div');
        const titleHTML = document.createElement('p');
        const authorHTML = document.createElement('p');
        const readHTML = document.createElement('p');
        const pagesHTML = document.createElement('p');
        const icons = document.createElement('i');
        const check = document.querySelector('#is-read');


        if (check.checked === true) {
            readHTML.textContent = 'read'
            readHTML.style.color = 'lightgreen'
        } else if
            (check.checked === false) {
            readHTML.textContent = 'unread'
            readHTML.style.color = 'red'
        };

        

        bookCard.classList.add('card');
        titleHTML.classList.add('title');
        authorHTML.classList.add('author');
        readHTML.classList.add('read');
        pagesHTML.classList.add('pages');

        bookCard.dataset.index = i;
        i++
        titleHTML.textContent = book.title;
        authorHTML.textContent = book.author;
        pagesHTML.textContent = book.pages;


        bookCard.appendChild(titleHTML)
        bookCard.appendChild(authorHTML)
        bookCard.appendChild(pagesHTML)
        bookCard.appendChild(readHTML)
        container.appendChild(bookCard);




        icons.classList.add('icon-pack');
        bookCard.appendChild(icons);
        let trash = document.createElement('i')
        trash.classList.add('far');
        trash.classList.add('fa-trash-alt');
        icons.appendChild(trash);

        let bookIcon = document.createElement('i')
        bookIcon.classList.add('fas');
        bookIcon.classList.add('fa-book-reader');
        icons.appendChild(bookIcon);
    })

};



