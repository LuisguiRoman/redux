import axios from 'axios';
import { TRAER_TODOS } from '../types/publicaciones-types';

//una funcion que retorna otra funcion
export  const traerTodos = () => async (dispatch) => {
    try {
        //hacer la peticion
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
}