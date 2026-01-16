
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let logo = document.querySelector('#logo')
let textBackground = document.querySelector('.content')

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
        pageContent.style.color = 'rgb(255, 255, 255)';
        textBackground.style.backgroundColor = 'rgb(38, 135, 157)';
        logo.style.opacity = '0.5';
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Courier New, sans-serif";
        pageContent.style.color = 'rgb(255, 255, 255)';
        textBackground.style.backgroundColor = 'rgb(54, 67, 49)';
        logo.style.opacity = '0.5';
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        pageContent.style.color = 'rgb(255, 255, 255)';
        textBackground.style.backgroundColor = 'rgb(196, 138, 37)';
        logo.style.opacity = '0.5';
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
        pageContent.style.color = 'rgb(0, 0, 0)';
        textBackground.style.backgroundColor = 'transparent';
        logo.style.opacity = '1.0';
    }
}