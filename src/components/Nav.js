import React from 'react';
export default function Nav() {
    return (
        <div className="container">
            <div className="btn-group d-flex flex-row flex-wrap" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Acción</button>
                <button type="button" className="btn btn-secondary">Comedia</button>
                <button type="button" className="btn btn-secondary">Terror</button>
                <button type="button" className="btn btn-secondary">Ciencia Ficción</button>
                <button type="button" className="btn btn-secondary">Estrenos</button>
            </div>
        </div>
    )
}
