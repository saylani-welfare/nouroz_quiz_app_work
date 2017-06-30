
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import TokenReducer from '../store/reducers/adminReducers/tokenReducer';
import MakeMCQsReducer from '../store/reducers/adminReducers/makeMCQsReducer';
import AsyncReducer from '../store/reducers/adminReducers/asyncReducer';


const rootReducer = combineReducers({
    TokenReducer,
    MakeMCQsReducer,
    AsyncReducer
})

const Store = compose(
    applyMiddleware(thunk),
    autoRehydrate()
)(createStore)(rootReducer)

// const Store = createStore(rootReducer, undefined, compose(applyMiddleware(thunk), autoRehydrate()));

persistStore(Store);

export default Store

