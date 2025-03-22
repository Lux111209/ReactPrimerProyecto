import './Estilos.css';

const Badge = ({text}) =>
{
    return(

        <h1>Example heading <span class="badge text-bg-secondary">{text}</span></h1>
    )
    
}
export default Badge;