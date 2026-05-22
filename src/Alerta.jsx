function Alerta(props) {
    // Aqui usamos props.texto, enviada pelo componente App
    return (
        <div class="alert alert-warning text-center" role="alert">
            {props.mytext}
        </div>
    );
}
export default Alerta;

