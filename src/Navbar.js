import React, { useRef } from "react";

export default function NavBar({ agregarNota }) {
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importante = importanteRef.current.checked;
        if (titulo && descripcion) {
            agregarNota(titulo, descripcion, importante);
            tituloRef.current.value = '';
            descripcionRef.current.value = '';
            importanteRef.current.checked = false;
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="form-container">
                        <h1 className="text-left">Post It Simulator!</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row d-flex align-items-center">
                                <div className="col-md-4 mb-3 mr-3">
                                    <input ref={tituloRef} type="text" className="form-control" placeholder="Título"></input>
                                </div>
                                <div className="col-md-6 mb-3 mx-3">
                                    <input ref={descripcionRef} type="text" className="form-control" placeholder="Descripción"></input>
                                </div>
                                <div className="col-auto mb-3 mx-4">
                                    <div className="form-check">
                                        <input ref={importanteRef} className="form-check-input" type="checkbox" id="importantCheck"></input>
                                        <label className="form-check-label" htmlFor="importantCheck">
                                            ¡Importante!
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <button type="submit" className="btn btn-dark w-100">Agregar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
