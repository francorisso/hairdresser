import Immutable from 'immutable';
import { normalize } from 'normalizr';
import { getJSON, postJSON } from '../lib/fetch';
import { personalSchema } from '../schemas';
import { merge } from './entities';

const NAMESPACE = 'hairdresser-helper/personal';

export const ADD = `${NAMESPACE}/add`;
export const ADD_SUCCESS = `${ADD}/success`;
export const ADD_FAILURE = `${ADD}/failure`;
export const GET = `${NAMESPACE}/get`;
export const GET_SUCCESS = `${GET}/success`;
export const GET_FAILURE = `${GET}/failure`;
export const TOGGLE_ADD_FORM = `${NAMESPACE}/toggle_add_form`;

const initState = Immutable.Map({
  adding: false,
  personal: Immutable.List(),
});
export default function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_SUCCESS: {
      const { person } = action;
      return state.set('personal', state.get('personal').push(person));
    }
    case GET_SUCCESS: {
      const { personal } = action;
      return state.set('personal', Immutable.List(personal));
    }
    case TOGGLE_ADD_FORM: {
      return state.set('adding', !state.get('adding'));
    }
    default:
      return state;
  }
}

export function toggleAddForm() {
  return {
    type: TOGGLE_ADD_FORM,
  };
}

export function add({ name, services }) {
  return (dispatch) => {
    dispatch({
      type: ADD,
      params: { name, services },
    });
    return postJSON('/api/personal', { name, services })
      .then((person) => {
        dispatch({
          type: ADD_SUCCESS,
          person,
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_FAILURE,
          error,
        });
      });
  };
}

export function get() {
  return dispatch => getJSON('/api/personal')
    .then((res) => {
      const { result: personal, entities } = normalize(res, personalSchema);
      dispatch(merge(entities));
      dispatch({
        type: GET_SUCCESS,
        personal,
      });
    })
    .catch((error) => {
      dispatch({ type: GET_FAILURE, error });
    });
}
