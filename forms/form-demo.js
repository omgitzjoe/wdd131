// form-demo.js
function validateForm(event) {
  // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
  const theForm = event.target;
  // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
  // To keep it from happening we can can call e.preventDefault()
  // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
  const errors = [];
  // start by assuming the form is valid.
  let isValid = true;
  // add our validations here
  if (theForm.paymentMethod.value==='creditCard'){
    if (theForm.creditCardNumber.value  !=='1234123412341234'){
        isValid=false;
        errors.push('Invalid Credit Card Number')
    }
  }
  if (theForm.fullName.value!=='Bob'){
    isValid=false;
    errors.push('Invalid name')
  }
  // if we ran into any problems above valid will be false.
  if (!isValid) {
    //stop the form from being submitted
    event.preventDefault();
    // show the errors
    showErrors(errors);
    // return false to let the browser know the form was not submitted.
    return false;
  }
}

function togglePaymentDetails(e) {
  // get a reference to the form. We can access all the named form inputs through the form element.
  const theForm = document.querySelector("#checkoutForm");
  // we will also need the creditCardContainer and paypalUsernameContainer
  const creditCardNumberContainer = document.getElementById('creditCardNumberContainer');
  const paypalContainer = document.getElementById('paypalUsernameContainer');
  creditCardNumberContainer.classList.add("hide");
  paypalContainer.classList.add("hide");
  // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!
  theForm.paypalUsername.required=false;
  theForm.creditCardNumber.required=false;
  // Show the container based on the selected payment method, and add the required attribute back.
    if (theForm.paymentMethod.value==='creditCard'){
        creditCardNumberContainer.classList.remove('hide')
        theForm.creditCardNumber.required=true;
    }
    else if (theForm.paymentMethod.value==='paypal'){
        paypalContainer.classList.remove('hide')
        theForm.paypalUsername.required=true;
    }
}

// helper function to display our errors.
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}
// attach a change event handler to the paymentMethod input
document
    .querySelector('#paymentMethod')
    .addEventListener('change', togglePaymentDetails);
document
    .querySelector('#checkoutForm')
    .addEventListener('submit',validateForm);
// attach a submit event handler to the form