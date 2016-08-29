import Immutable from 'immutable';

const NAMESPACE = 'hairdresser-helper/personal';

export const ADD = `${NAMESPACE}/add`;
export const ADD_POST = `${ADD}/post`;
export const ADD_SUCCESS = `${ADD}/success`;
export const ADD_ERROR = `${ADD}/post`;

export const TOGGLE_ADD_FORM = `${NAMESPACE}/toggle_add_form`;

const initState = Immutable.Map({
  adding : false,
  personal: Immutable.List([
    {
      name: 'Rosana',
      services: []
    },
    {
      name: 'Magali',
      services: []
    },
    {
      name: 'Luciana',
      services: []
    },
  ]),
});
export default function reducer (state=initState, action) {
  switch (action.type) {
    case ADD_SUCCESS: {
      const {name, time} = action;
      return state.set('personal', state.get('personal').push({name, time}));
    }
    case TOGGLE_ADD_FORM: {
      return state.set('adding', !state.get('adding'));
    }
    default:
      return state;
  }
}

export function toggleAddForm () {
  return {
    type: TOGGLE_ADD_FORM,
  };
}

export function add ({name}) {
  return dispatch => {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve({
            name,
            services: []
          });
        }, 4000);
      })
      .then(({name, services}) => {
        dispatch({
          type: ADD_SUCCESS,
          name,
          services,
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_ERROR,
          error,
        });
      });
  };
}
