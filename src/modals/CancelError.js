import Swal from 'sweetalert2'

export default function CancelError() {
    Swal.fire({
      html: `<h1 style = 'color: #fff'>Alguma coisa deu errado, tente novamente mais tarde!</h1>`,
      width: '95%',
      background: '#0E0E13',
      confirmButtonColor: '#FF4791',
    });
}