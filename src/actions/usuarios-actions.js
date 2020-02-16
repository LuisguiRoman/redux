import axios from 'axios';
import { TRAER_TODOS } from '../types/usuarios-types';

//una funcion que retorna otra funcion
export  const traerTodos = () => async (dispatch) => {
    //hacer la peticion
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
        type: TRAER_TODOS,
        payload: response.data
    });
}