import './Estilos.css';

const Stack = ({uno, dos, tres}) =>
{
    return(
        <div class="vstack gap-3">
  <div class="p-2">{uno}</div>
  <div class="p-2">{dos}</div>
  <div class="p-2">{tres}</div>
</div>
    )
}
export default Stack;