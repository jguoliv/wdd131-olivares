const theForm = document.querySelector('#checkoutForm');

function displayError(msg) {
    document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(number) {
    return number === '1234123412341234';
}

function submitHandler(event) {
    event.preventDefault();

    let errorMsg = '';
    displayError('');

    const cardNum = document.querySelector('#creditCardNumber').value.trim();
    const expMonth = Number(document.querySelector('#month').value);
    const expYear = Number(document.querySelector('#year').value);
    const currentDate = new Date();

    if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid\n';
    }

    const fullYear = 2000 + expYear;

    if (
    fullYear < currentDate.getFullYear() ||
    (fullYear === currentDate.getFullYear() &&
        expMonth <= currentDate.getMonth() + 1)
    ) {
    errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
    displayError(errorMsg);
    return;
    }

    theForm.innerHTML = '<h2>Thank you for your purchase.</h2>';
}

theForm.addEventListener('submit', submitHandler);