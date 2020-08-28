import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {contactReducer} from '../reducer/contactReducer';

export const store = createStore(contactReducer, applyMiddleware(thunk));
