import Immutable from 'immutable'

const NAMESPACE = 'hairdresser-helper/personal';

export const ADD = `${NAMESPACE}/add`;
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
    case ADD: {
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

export function add ({name, time}) {
  return {
    type: ADD,
    name,
    time,
  };
}

export function toggleAddForm () {
  return {
    type: TOGGLE_ADD_FORM,
  };
}
