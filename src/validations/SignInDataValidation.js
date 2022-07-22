import Swal from 'sweetalert2';
import { EmailValidation, PasswordValidation } from './InputDataValidation';

function modal(text) {
  return (
    Swal.fire({
      html: `<h1 style = 'color: #fff'>${text}</h1>`,
      width: '95%',
      background: '#0E0E13',
      confirmButtonColor: '#FF4791',
    }) 
  )
}

export function SignInDataValidation(email, password) {
  if (!EmailValidation(email))
    modal('Digite um e-mail válido');
  else if (!PasswordValidation(password))
    modal('Senha inválida! A senha precisa ter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um número');

  if (!EmailValidation(email) || !PasswordValidation(password)) return false;

  return true;
}