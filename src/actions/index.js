import axios from 'axios';

export const authenticateAction = (username, password) => (dispatch) => {
  dispatch({ type: 'AUTHENTICATE_REQUEST' });
  return axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then((payload) => {
      console.log(payload);
      console.log('XD');

      dispatch({
        type: 'AUTHENTICATE_SUCCESS',
        payload,
      });
    })
    .catch(
      (err) => {
        console.log(err);
        dispatch({ type: 'AUTHENTICATE_FAILURE' });
      },
    );
};
export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const getId = () => `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};
