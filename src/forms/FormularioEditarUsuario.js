import React, { useState, useEffect } from 'react';

const FormularioEditarUsuario = (props) => {
    const [usuario, setUsuario] = useState(props.usuarioActual);

    useEffect(() => {
        setUsuario(props.usuarioActual);
    }, [props]);

    const gestionarCampo = (event) => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value });
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.actualizarUsuario(usuario.id, usuario);
            }}
        >
            <div className="form-group">
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    value={usuario.nombre}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    className="form-control"
                    value={usuario.apellido}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-danger">Actualizar usuario</button>
                <button
                    className="btn btn-primary ml-2"
                    onClick={() => props.setEditando(false)}
                >
                    Cancelar
                </button>
            </div>
        </form>
    )
}

export default FormularioEditarUsuario;