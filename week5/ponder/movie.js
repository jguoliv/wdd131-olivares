const allRtaingElems = document.querySelectorAll('article.movie p span');
allRtaingElems.forEach((elem) => {
    const rating = elem.innerText.length;
    elem.setAttribute('aria-label', `${rating} out of 5 stars` );
    console.log(elem);
})