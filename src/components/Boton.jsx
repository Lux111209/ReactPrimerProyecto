import './Estilos.css';

const Boton = ({titulo}) =>
{
    return(
        <button type="button" className='contenedor'>
            {titulo}
            </button>
    )
}
export default Boton;