import './Estilos.css';

const Toast = ({btn, title, description, saludo}) =>
{

  const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
    return(
     <>
      <button type="button" class="btn btn-primary" id="liveToastBtn">{btn}</button>

          <div class="toast-container position-fixed bottom-0 end-0 p-3">
          <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
          <strong class="me-auto">{title}</strong>
          <small>{description}</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
         <div class="toast-body">{saludo}</div>
  </div>
</div></>
      


    )
}
export default Toast;