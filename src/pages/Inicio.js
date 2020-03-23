import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ListarPeliculas from '../components/ListarPeliculas';
import ListarRecomendadas from '../components/ListarRecomendadas';
export default function Inicio() {
    return (
        <div className="container" style={{background:"#A4A4A4"}}>
            <Header/>
            <Nav/>
            <div className="container">
                <div className="row" style={{margin:"0 auto"}}>
                    <ListarPeliculas />
                    <ListarRecomendadas/>
                </div>
            </div>
        </div> 
    )
}
