import React from 'react'
import {Link} from 'react-router-dom'
export default function Peliculas(props) {
    if(props.titulo){
        return (
        
            <div className={props.class} style={{width: props.tamaño}}>
                <Link to={`detalle/${props.titulo}`}>
                    <img src={props.img} className="card-img-top" alt="..."/>
                </Link>
                
            </div>
        )
    }else{
        return (
        
            <div className={props.class} style={{width: props.tamaño,margin:props.margin}}>
                <Link to={`detalle/${props.titulo}`}>
                <img src={props.img} className="card-img-top" alt="..."/>
                </Link>
            </div>
        )
    }
   
}
