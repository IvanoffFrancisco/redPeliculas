import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Inicio from './pages/Inicio';
import DetallePelicula from './pages/DetallePelicula.js';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Inicio}/>
            <Route exact path="/detalle/:titulo" component={DetallePelicula}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
