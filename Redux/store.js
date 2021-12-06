import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';

const middleware = [ thunk ]
const composeEnchancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const makeStore = () => createStore(rootReducer, composeEnchancers(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore)
