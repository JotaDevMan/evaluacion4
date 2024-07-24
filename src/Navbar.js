import React, { useRef, useState } from "react";

export default function NavBar({ agregarNota }) {
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();
    const [error, setError] = useState(false);

    // Manejar el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importante = importanteRef.current.checked;

        // Agregar la nota si hay descripcion, de lo contrario lanza un error 
        if (descripcion) {
            agregarNota(titulo, descripcion, importante);
            tituloRef.current.value = '';
            descripcionRef.current.value = '';
            importanteRef.current.checked = false;
            setError(false); 
        } else {
            setError(true); 
        }
    };

    return (
        <div className="container"> 
            <div className="row justify-content-center">
                <div className="col-12 mb-3">
                    <div className="form-container">
                        <h1 className="text-left">Post It Simulator!</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row d-flex flex-column flex-md-row ">
                                <div className="col-12 col-md-5 col-lg-3 mb-3 mr-md-3">
                                    <input ref={tituloRef} type="text" className="form-control" placeholder="Título" maxLength={15}></input>
                                </div>
                                <div className="col-12 col-md-7 col-lg-4 mb-3 mx-md-3">
                                    <input ref={descripcionRef} type="text" className="form-control" placeholder="Descripción" maxLength={110}></input>
                                    {error && <div id="error-descripcion" className="small mt-2 text-danger">* La descripción es obligatoria</div>}
                                </div>
                                
                                <div className="col-12 col-md-auto mb-3 mx-md-4 d-md-block d-lg-inline-block">
                                    <div className="form-check">
                                        <input ref={importanteRef} className="form-check-input" type="checkbox" id="importantCheck"></input>
                                        <label className="form-check-label" htmlFor="importantCheck">
                                            Importante!
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 mb-3 mx-md-5 d-md-block d-lg-inline-block">
                                    <button type="submit" className="btn btn-dark w-100">AGREGAR</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
