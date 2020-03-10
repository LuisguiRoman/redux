import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu } from './menu';
import Usuarios from './usuarios';
import Publicaciones from './Publicaciones';

const Tareas = () => (
    <div>Tareas</div>
)

export const App = () =>{

    return(
        <Router>
            <Menu />

            <div>
                <Route exact path="/" component={Usuarios} />
                <Route exact path="/tareas" component={Tareas} />
                <Route exact path="/publicaciones/:key" component={Publicaciones} />
            </div>
        </Router>
    );
}