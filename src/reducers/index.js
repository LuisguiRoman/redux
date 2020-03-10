import { combineReducers } from 'redux';
import usuariosReducer from './usuarios-reducer';
import publicacionesReducer from './publicaciones-reducers';

export default combineReducers({
    usuariosReducer,
    publicacionesReducer
});