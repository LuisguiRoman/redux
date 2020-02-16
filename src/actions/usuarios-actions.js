import axios from 'axios';
import { TRAER_TODOS, LOADING } from '../types/usuarios-types';

//una funcion que retorna otra funcion
export  const traerTodos = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        //hacer la peticion
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
}