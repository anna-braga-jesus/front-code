import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  // aqui você pode definir o estado inicial da sua aplicação
};

function reducer(state = initialState, action) {
  // aqui você pode definir as suas actions e reducers
}

const store = createStore(reducer);

export default store;
