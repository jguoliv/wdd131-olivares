function doSomething() {
    console.log('The DOM is fully loaded');
}
document.addEventListener('DOMContentLoaded', doSomething);

// DOMContentLoaded
// defer

document.addEventListener('DOMContentLoaded', function() {
    console.log('The DOM is fully loaded');
});

// wk2meta
// do the video :)