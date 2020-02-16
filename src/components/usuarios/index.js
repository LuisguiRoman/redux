import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuarios-actions';

class Usuarios extends Component{

    componentDidMount(){
        this.props.traerTodos();
    }
    
    render(){
        return(
            <div className="margen">
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Enlace</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {this.props.usuarios.map((usuario)=>(
                            <tr key={usuario.id}>
                                <td>{usuario.name}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}


//Seleccionar que reducer va a usar este componente
//que estado global le vamos a enviar como props
const mapStateToProps = (reducers) =>{
    return reducers.usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);