import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Spinner } from '../general/Spinner';

import * as usuariosActions from '../../actions/usuarios-actions';

class Usuarios extends Component{

    componentDidMount(){
        this.props.traerTodos();
    }

    putContent = () => (
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
    
    render(){
        return(
            <div>
                {this.props.loading ? 
                    <Spinner /> :
                    this.putContent()
                }
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