import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Inicio from './pages/Inicio'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Inicio}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
