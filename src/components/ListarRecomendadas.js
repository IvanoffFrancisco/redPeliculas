import React,{useState,useEffect} from 'react'
import Pelicula from '../components/Peliculas'

export default function ListarRecomendadas() {
    const [peliculas,setPeliculas]=useState([]); 
    
    useEffect(() => {
    const cargarDatos=()=>{
        setPeliculas(Peliculas)
    }
    cargarDatos();
    },[]);

    const Peliculas=[
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/03/1917.jpg",
            titulo:"Su último deseo (2020)"
        },
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/03/1917.jpg",
            titulo:"Su último deseo (2020)"
        },
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/03/1917.jpg",
            titulo:"Su último deseo (2020)"
        },
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/03/1917.jpg",
            titulo:"Su último deseo (2020)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/03/1917.jpg",
            titulo:"Su último deseo (2020)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/03/1917.jpg",
            titulo:"1917 (2019)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/03/1917.jpg",
            titulo:"1917 (2019)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/03/1917.jpg",
            titulo:"1917 (2019)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/03/1917.jpg",
            titulo:"1917 (2019)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/03/1917.jpg",
            titulo:"Su último deseo (2020)"
        }
    ];


    return (
        <div className="col-xl-4" style={{padding:"0px", background:"#BDBDBD", border:"2px solid #BDBDBD", borderRadius:"15px"}}>
                <h3 style={{color:"#fff",margin:"6px 0 0 0"}} className="text-center">Recomendadas</h3>
                <div className="row" style={{margin:"0px auto"}}>
                        {
                            peliculas.map(pelis=>{
                                return(
                                    <Pelicula tamaño="6rem" class="card" margin="10px 0 10px 18px" img={pelis.img}/>
                                )
                            })
                        }
                </div>
            </div>
    )
}
