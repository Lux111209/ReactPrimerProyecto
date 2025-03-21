import './Estilos.css';

const Alert = ({titulo}) =>
{
    return(
        <div class="alert alert-danger" role="alert" className='contenedor2'>
            {titulo}
            </div>
    )
}
export default Alert;