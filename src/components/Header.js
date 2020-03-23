import React from 'react';
import {Link} from 'react-router-dom';
import ImgPrincipal from '../components/imgs/jugar.png'
export default function Header() {
    return (
        <div>
            <header classNames="navbar navbar-light bg-light">
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <Link href="/" >
                            <img src={ImgPrincipal} width="100" height="50" className="img-fluid ml-2 mt-2" alt=""/>
                        </Link>
                    </div>
                    <div>
                        <h1 style={{color:"white"}}>
                            Red Peliculas
                        </h1>
                    </div>
                </div>
            </header>
        </div>
    )
}
