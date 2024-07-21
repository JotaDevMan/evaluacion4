import React, { useRef } from "react";

export default function NavBar({ onAddPostIt }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const importantRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const important = importantRef.current.checked;
        if (title && description) {
            onAddPostIt(title, description, important);
            titleRef.current.value = '';
            descriptionRef.current.value = '';
            importantRef.current.checked = false;
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-left">
                <div className="col-md-8">
                    <div className="form-container">
                        <h1 className="text-left">Post It Simulator!</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row d-flex">
                                <div className="col-md-4 mb-3 mr-3">
                                    <input ref={titleRef} type="text" className="form-control" placeholder="Título"></input>
                                </div>
                                <div className="col-md-6 mb-3 mx-3">
                                    <input ref={descriptionRef} type="text" className="form-control" placeholder="Descripción"></input>
                                </div>
                                <div className="col-auto mb-3 mx-4">
                                    <div className="form-check">
                                        <input ref={importantRef} className="form-check-input" type="checkbox" id="importantCheck"></input>
                                        <label className="form-check-label" htmlFor="importantCheck">
                                            ¡Importante!
                                        </label>
                                    </div>
                                </div>
                                <div className="col-7 mb-3">
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
