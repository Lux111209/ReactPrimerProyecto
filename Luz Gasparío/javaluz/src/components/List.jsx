import './Estilos.css';

const List = ({ t1, t2, t3 }) => {
    return (
        <div class="card" >
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{t1}</li>
                <li class="list-group-item">{t2}</li>
                <li class="list-group-item">{t3}</li>
            </ul>
        </div>
    )
}
export default List;