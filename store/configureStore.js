import { applyMiddleware, compose, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(reducer, enhancer);    
    store.dispatch({
        type: 'CHANGE_NICKNAME',
        data: 'boogi',
    })
    return store
};

const wrapper = createWrapper(configureStore, {debug: process.env.NODE_ENV === 'development'});

export default wrapper;