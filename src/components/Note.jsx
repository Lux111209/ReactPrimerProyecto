import './Estilos.css';

const Note = ({m1, message1, m2}) =>
{
    return(
        <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">{m1}</h4>
  <p>{message1}</p>
  <p class="mb-0">{m2}</p>
</div>
    )
}
export default Note;