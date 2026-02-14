const ratingElem = document.querySelectorAll('main div.book-details p span');
ratingElem.forEach((elem) => {
    const rating = elem.innerText.length;
    elem.setAttribute('aria-label', `${rating} out of 5 stars` );
    console.log(elem);
})