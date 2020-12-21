import { createStore } from 'redux';
import notesApp from 'reducers';

const store = createStore(notesApp,
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-undef,no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
