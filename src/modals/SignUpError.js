import Swal from 'sweetalert2'

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

export default function showError(status) {
  if(status === 400)
    modal('Algum dado está inválido, tente novamente!');
  else if (status === 409)
    modal('Essa conta com esses dados já foi registrada, tente novos dados!');
}