import Swal from 'sweetalert2'

export default function SignInSucess() {
  Swal.fire({
    html: `<h1 style = 'color: #fff'>Conta logada com sucesso!</h1>`,
    timer: 2000,
    background: '#0E0E13',
    timerProgressBar: true,
    showConfirmButton: false,
    position: 'top',
  })
}