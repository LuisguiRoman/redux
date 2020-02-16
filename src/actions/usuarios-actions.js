import axios from 'axios'

//una funcion que retorna otra funcion
export  const traerTodos = () => async (dispatch) => {
    //hacer la peticion
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
        type: 'traer_usuarios',
        payload: response.data
    });
}