import React from 'react'
import {Link} from 'react-router-dom'
export default function Peliculas(props) {
    if(props.titulo){
        return (
        
            <div className={props.class} style={{width: props.tamaño}}>
                <Link to={`detalles/${props.id}`}>
                    <img src={props.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo}</h5>
                    </div>
                </Link>
                
            </div>
        )
    }else{
        return (
        
            <div className={props.class} style={{width: props.tamaño,margin:props.margin}}>
                <Link to={`detalles/${props.id}`}>
                <img src={props.img} className="card-img-top" alt="..."/>
                </Link>
            </div>
        )
    }
   
}
