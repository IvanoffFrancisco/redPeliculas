import React,{useState,useEffect} from 'react'
import Pelicula from '../components/Peliculas'

export default function ListarPeliculas() {
    const [peliculas,setPeliculas]=useState([]); 
    
    useEffect(() => {
    const cargarDatos=()=>{
        setPeliculas(Peliculas)
    }
    cargarDatos();
    },[]);

    const Peliculas=[
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/02/the-last-thing-he-wanted.jpg",
            titulo:"Su último deseo (2020)"
        },
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/02/the-last-thing-he-wanted.jpg",
            titulo:"Su último deseo (2020)"
        },
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/02/the-last-thing-he-wanted.jpg",
            titulo:"Su último deseo (2020)"
        },
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/02/the-last-thing-he-wanted.jpg",
            titulo:"Su último deseo (2020)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/02/the-last-thing-he-wanted.jpg",
            titulo:"Su último deseo (2020)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/02/the-last-thing-he-wanted.jpg",
            titulo:"Su último deseo (2020)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/02/the-last-thing-he-wanted.jpg",
            titulo:"Su último deseo (2020)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/02/the-last-thing-he-wanted.jpg",
            titulo:"Su último deseo (2020)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/02/the-last-thing-he-wanted.jpg",
            titulo:"Su último deseo (2020)"
        }
        ,
        {
            img:"https://www.cinecalidad.to/wp-content/uploads/2020/02/the-last-thing-he-wanted.jpg",
            titulo:"Su último deseo (2020)"
        }
    ];

    return (
            <div className="col-xl-8" style={{padding:"0 0 0 10px"}}>
                <div className="row" style={{margin:"0px auto"}}>
                    {
                        peliculas.map(pelis=>{
                            return(
                                <Pelicula tamaño="10rem" class="card m-2" img={pelis.img} titulo={pelis.titulo}/>
                            )
                        })
                    }
                </div>
            </div>
    )
}
