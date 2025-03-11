export default function Formulario() {
    return (
        <form>
        <label>
            Nombre:
            <input type="text" name="nombre" />
        </label>
        <br />
        <label>
            Apellido:
            <input type="text" name="apellido" />
        </label>
        <br />
        <label>
            Correo:
            <input type="email" name="correo" />
        </label>
        <br />
        <button type="submit">Enviar</button>
        </form>
    );
}
