import Swal from 'sweetalert2'

export default function CardError() {
    Swal.fire({
      html: `<h1 style = 'color: #fff'>Algum dado está inválido, tente novamente!</h1>`,
      width: '95%',
      background: '#0E0E13',
      confirmButtonColor: '#FF4791',
    });
}