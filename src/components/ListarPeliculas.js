import React,{useState,useEffect} from 'react'
import Pelicula from '../components/Peliculas'

export default function ListarPeliculas(props) {
    const [peliculas,setPeliculas]=useState([]); 

    useEffect(() => {
        const cargarDatos=async ()=>{
                const res=await fetch('http://localhost:4000/getmovies');
                const respuesta=await res.json();
                setPeliculas(respuesta);   
        }
        cargarDatos();
    },[]);

    return (
            <div className="col-xl-8" style={{padding:"0 0 0 10px"}}>
                <div className="row" style={{margin:"0px auto"}}>
                    {
                        peliculas.map(pelis=>{
                            return(
                                <Pelicula key={pelis._id} tamaño="10rem" class="card m-2" id={pelis._id} titulo={pelis.name} img={pelis.image}/>
                            )
                        })
                    }
                </div>
            </div>
    )
}
