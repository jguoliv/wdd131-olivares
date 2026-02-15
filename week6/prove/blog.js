const books = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description: 'The anticipated new novel by Rick Riordan exploring Norse mythology.',
        imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 3,
        title: 'Belgariad Book One: Pawn of Prophecy',
        date: 'Feb 12, 2022',
        description: 'A fierce dispute among the Gods divides the world into five kingdoms.',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg',
        imgAlt: 'Book cover for Pawn of Prophecy',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐⭐'
    }
];

const container = document.getElementById("books-container");

books.forEach((book) => {
    const section = document.createElement("section");
    section.classList.add("book-grid");

    section.innerHTML = `
        <hr class="divider">

        <div id="book-details">
            <article class="book">
                <p class="date">${book.date}</p>
                <p>${book.ages}</p>
                <p>${book.genre}</p>
                <p><span>${book.stars}</span></p>
            </article>
        </div>

        <div id="book-display">
            <article class="book">
                <h1>${book.title}</h1>
                <img src="${book.imgSrc}" alt="${book.imgAlt}">
                <p>${book.description}</p>
            </article>
        </div>
    `;

    container.appendChild(section);
});

const ratingElem = document.querySelectorAll('main div#book-details p span');
ratingElem.forEach((elem) => {
    const rating = elem.innerText.length;
    elem.setAttribute('aria-label', `${rating} out of 5 stars` );
    console.log(elem);
})