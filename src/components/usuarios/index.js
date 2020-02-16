import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';

class Usuarios extends Component{
    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');

        this.setState({
            usuarios: res.data
        });
    }
    
    ponerfilas = () =>(
        this.props.usuarios.map((usuario)=>(
            <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.website}</td>
            </tr>
        ))
    )

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
                        { this.ponerfilas() }
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

export default connect(mapStateToProps, {})(Usuarios);