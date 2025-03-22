import './Estilos.css';

const Spinner = ({spin}) =>
{
    return(
        <div class="spinner-border text-info" role="status">
           <span class="visually-hidden">{spin}</span>
        </div>
    )
}
export default Spinner;