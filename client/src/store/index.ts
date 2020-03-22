import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export type ApplicationState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<ApplicationState> = useReduxSelector;

export default store;