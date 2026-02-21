const theForm = document.querySelector('#checkoutForm');

// display error messages
function displayError(msg) {
  document.querySelector('.errors').textContent = msg;
}

// fake card validation (for class)
function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function submitHandler(event) {
  event.preventDefault();

  let errorMsg = '';
  displayError('');

  // CARD NUMBER
  const cardNum = document
    .querySelector('#creditCardNumber')
    .value
    .trim();

  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid\n';
  }

  // EXPIRATION DATE
  const expYear = Number(document.querySelector('#year').value);
  const expMonth = Number(document.querySelector('#month').value);
  const currentDate = new Date();

  if (
    2000 + expYear < currentDate.getFullYear() ||
    (2000 + expYear === currentDate.getFullYear() &&
      expMonth <= currentDate.getMonth() + 1)
  ) {
    errorMsg += 'Card is expired\n';
  }

  // CVV
  const cvv = document.querySelector('#cvv').value.trim();

  if (!/^\d{3}$/.test(cvv)) {
    errorMsg += 'CVV must be 3 digits\n';
  }

  // FINAL CHECK
  if (errorMsg !== '') {
    displayError(errorMsg);
    return;
  }

  // SUCCESS
  theForm.innerHTML = '<h2>Thank you for your purchase.</h2>';
}

theForm.addEventListener('submit', submitHandler);