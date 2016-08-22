import Immutable from 'immutable'

const NAMESPACE = 'hairdresser-helper/services';

export const ADD = `${NAMESPACE}/add`;
export const TOGGLE_ADD_FORM = `${NAMESPACE}/toggle_add_form`;

const initState = Immutable.Map({
  adding : false,
  services: Immutable.List([
    {
      name: 'Peluqueria',
      time: 40
    },
    {
      name: 'Color',
      time: 60
    },
  ]),
});
export default function reducer (state=initState, action) {
  switch (action.type) {
    case ADD: {
      const {name, time} = action;
      const services = state.get('services').push({name, time});
      return state.set('services', services);
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
