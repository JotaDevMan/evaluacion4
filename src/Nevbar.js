import React from "react"

export default function NavBar() {
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="form-container">
                        <h1 className="text-left">Post It Simulator!</h1>
                        <form>
                            <div className="form-row d-flex align-items-center">
                                <div className="col-md-4 mb-3 mr-3">
                                    <input type="text" className="form-control" placeholder="Título"></input>
                                </div>
                                <div className="col-md-6 mb-3 mx-3">
                                    <input type="text" className="form-control" placeholder="Descripción"></input>
                                </div>
                                <div className="col-auto mb-3 mx-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="importantCheck"></input>
                                        <label className="form-check-label" htmlFor="importantCheck">
                                            ¡Importante!
                                        </label>
                                    </div>
                                </div>
                                <div className="d-grid col-6 mb-3">
                                    <button type="submit" className="btn btn-dark ">Agregar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}