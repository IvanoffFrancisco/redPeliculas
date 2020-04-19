import React,{useState,useEffect} from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ListarPeliculas from '../components/ListarPeliculas';
import ListarRecomendadas from '../components/ListarRecomendadas';
import Footer from '../components/Footer.js';

export default function Inicio() {
    const[data,setdata]=useState({inicio:true,filtro:""});

    const accion=(inicio=false)=>{
        setdata({inicio:inicio,filtro:'accion'})
    }
    const terror=(inicio=false)=>{
         setdata({inicio:inicio,filtro:'terror'})

    }
    const comedia=(inicio=false)=>{
         setdata({inicio:inicio,filtro:'comedia'})

    }
    const cienciaFiccion=(inicio=false)=>{
         setdata({inicio:inicio,filtro:'ciencia ficcion'})

    }
    const romance=(inicio=false)=>{
         setdata({inicio:inicio,filtro:'romace'})

    }
    const fantasia=(inicio=false)=>{
         setdata({inicio:inicio,filtro:'fantasia'})

    }
        return (
            <div className="container">
            <Header/>
            <Nav fantasia={fantasia} romance={romance} cienciaFiccion={cienciaFiccion} comedia={comedia} terror={terror} accion={accion} />
            <div className="container">
                <div className="row" style={{margin:"0 auto"}}>
                    <ListarPeliculas inicio={data.inicio} filtro={data.filtro} />
                    <ListarRecomendadas/>
                </div>
            </div>
            <Footer/>
        </div>
        )
    
}
