let selectElem = document.querySelector('#theme-select');
const pageContent = document.querySelector('body');
const logo = document.querySelector('#content img')
const h2 = document.querySelector("body h2");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.style.background = '#1E1E1E';
        pageContent.style.color = '#E0E0E0';
        h2.style.color = 'rgb(71, 148, 231)';
        logo.src = 'byui-logo-white.png';
        logo.style.width = '85px';
    } else {
        // default
        document.body.style.background = '#FFFFFF';
        pageContent.style.color = '#000000';
        h2.style.color = 'rgb(55, 115, 181)';
        logo.src = 'byui-logo.webp';
        logo.style.width = '100px';
    }
}