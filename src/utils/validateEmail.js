const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,10})+$/;

export function validateEmail(email) {
  if (email !== undefined) {
    if (email.length === 0) {
      return { invalid: true, message: 'Это поле не должно быть пустым!' };

    } else if (!regexEmail.test(email.toLowerCase())) {
      return { invalid: true, message: 'Неверный формат почты!' };
    } else if (regexEmail.test(email.toLowerCase())) {
      return { invalid: false, message: '' };
    }
  } else {
    return { invalid: true, message: '' };
  }
}
