import Immutable from 'immutable'
import { normalize, arrayOf } from 'normalizr';
import { getJSON, postJSON } from '../lib/fetch';
import { serviceSchema } from '../schemas';
import { merge } from './entities';

const NAMESPACE = 'hairdresser-helper/services';
export const ADD = `${NAMESPACE}/add`;
export const ADD_SUCCESS = `${ADD}/success`;
export const ADD_FAILURE = `${ADD}/failure`;
export const GET = `${NAMESPACE}/get`;
export const GET_SUCCESS = `${GET}/success`;
export const GET_FAILURE = `${GET}/failure`;
export const TOGGLE_ADD_FORM = `${NAMESPACE}/toggle_add_form`;

const initState = Immutable.Map({
  adding: false,
  services: Immutable.List([]),
});
export default function reducer (state=initState, action) {
  switch (action.type) {
    case ADD_SUCCESS: {
      return state.set(
        'services',
        state.get('services').push(action.service)
      );
    }
    case GET_SUCCESS: {
      return state.set('services', Immutable.List(action.services));
    }
    case TOGGLE_ADD_FORM: {
      return state.set('adding', !state.get('adding'));
    }
    default:
      return state;
  }
}

export function add ({name, time}) {
  return dispatch => {
    dispatch({type: ADD});
    return postJSON('/api/services', {
      name,
      time,
    })
    .then(service => {
      dispatch({
        type: ADD_SUCCESS,
        service: normalize(service, serviceSchema),
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_FAILURE,
        error,
      });
    });
  };
}

export function get () {
  return dispatch => {
    dispatch({type: GET});
    return getJSON('/api/services')
      .then(res => {
        const {result: services, entities} = normalize(res, arrayOf(serviceSchema));
        dispatch(merge(entities));
        dispatch({
          type: GET_SUCCESS,
          services,
        });
      })
      .catch(error => {
        dispatch({type: GET_FAILURE, error});
      });
  };
}

export function toggleAddForm () {
  return {
    type: TOGGLE_ADD_FORM,
  };
}
