const num = 7 // this is in global scale, therefore the function can use it. Use when you have a value needed multiple times.

function add(a, b) { // "add" is the function signature, it tells you what the funcitons is expecting. it's the name of the function. (a, b) are the parameters.
    return a + b; // eturn a + b + num;
}

function subtract(a, b) {
    return a - b;
}

const subtract = (a,b) => { // new syntax for functions.
    return a - b;
}

const subtract = (a,b) => a - b; // implicit return.


// add(10, 33) // actual data are arguments and not parameters.

// ans = add(3, 6) // 9
// ans = subtract(ans, 2) // 9 is lost, the value is now 7.

window.addEventListener("resize", function(){
    const width = this.window.innerWidth
})


const btn = document.querySelector(".menu-btn");
    console.log("button clicked");
    btn.classList.toggle("change)");

    change thingy to 8

transition: transform 0.7s ease-in-out