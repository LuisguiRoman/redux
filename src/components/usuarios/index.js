import React, { Component } from 'react';
import axios from 'axios';

export class Usuarios extends Component{
    constructor(props){
        super(props);

        this.state = {
            usuarios: []
        };
    }

    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');

        this.setState({
            usuarios: res.data
        });
    }
    
    ponerfilas = () =>(
        this.state.usuarios.map((usuario)=>(
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