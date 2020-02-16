import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu } from './menu';
import Usuarios from './usuarios';

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
            </div>
        </Router>
    );
}