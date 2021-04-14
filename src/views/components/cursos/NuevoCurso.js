import React, { Fragment } from 'react';

const NuevoCurso = () => {
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block primary"
            >Capacitaciones</button>

            <form
                className="formmulario-nuevo-curso"
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre de Categoría"
                    name="nombreCategoria"
                />
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre del Curso"
                    name="nombreCurso"
                />
                <input
                    type="text"
                    className="input-text"
                    placeholder="Descripción larga"
                    name="descripcionLarga"
                />
                <input
                    type="text"
                    className="input-text"
                    placeholder="Requerimientos"
                    name="requerimientos"
                />
                 <input
                    type="text"
                    className="input-text"
                    placeholder="Especificaciones"
                    name="especificaciones"
                />

                <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Agregar Curso"
                />

            </form>
        </Fragment>
    );
}

export default NuevoCurso;