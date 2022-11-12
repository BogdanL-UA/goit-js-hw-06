const loginForm = document.querySelector('.login-form');

const hendleSubmitLoginForm = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert(`Fill all filds!`);
  }
  const loginFormFildsValue = {
    email: email.value,
    password: password.value,
  };
  console.log(loginFormFildsValue);

  event.currentTarget.reset();
};
loginForm.addEventListener('submit', hendleSubmitLoginForm);
