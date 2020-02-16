import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './Tabla';
import { Spinner } from '../general/Spinner';

import * as usuariosActions from '../../actions/usuarios-actions';

class Usuarios extends Component{

    componentDidMount(){
        this.props.traerTodos();
    }
    
    render(){
        return(
            <div>
                {this.props.loading ? 
                    <Spinner /> :
                    <Table />
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