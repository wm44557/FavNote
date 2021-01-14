import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

// const store = createStore(notesApp,
//   // eslint-disable-next-line no-undef
//   // eslint-disable-next-line no-undef,no-underscore-dangle
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk));
// export default store;

// eslint-disable-next-line no-undef
// eslint-disable-next-line no-undef,no-underscore-dangle
const composeEnhanvers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
  || compose;
const store = createStore(rootReducer, composeEnhanvers(applyMiddleware(thunk)));
export default store;
