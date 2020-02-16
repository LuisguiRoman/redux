import { TRAER_TODOS, LOADING } from '../types/usuarios-types';

const INITIAL_STATE = {
    usuarios: [],
    loading: false
};

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TRAER_TODOS:
            return {
                ...state, 
                usuarios: action.payload,
                loading: false
            };
        case LOADING:
            return { ...state, loading: true };
        default: return state
    }
};