import './Estilos.css';

const Card = ({nombre, descripcion, mas}) =>
{
    return(
        <div class="card" style={{width: "18rem"}}>
           <div class="card-body">
           <h5 class="card-title">{nombre}</h5>
           <p class="card-text">Descripción: {descripcion}</p>
           <a href="#" class="btn btn-primary">Más: {mas}</a>
           </div>
        </div>
    )
}
export default Card;