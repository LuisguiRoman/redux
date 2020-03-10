import { TRAER_TODOS } from '../types/publicaciones-types';

const INITIAL_STATE = {
    publicaciones: []
};

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TRAER_TODOS:
            return {
                ...state, 
                publicaciones: action.payload
            };
        default: return state;
    }
};