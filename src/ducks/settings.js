import Immutable from 'immutable';

const NAMESPACE = 'hairdresser-helper/settings';

export const SAVE = `${NAMESPACE}/save`;

const initState = Immutable.Map({
  name: 'Pelu',
  address: 'An address',
});
export default function reducer(state = initState, action) {
  switch (action.type) {
    case SAVE: {
      const { name, address } = action;
      return state
        .set('name', name)
        .set('address', address);
    }
    default:
      return state;
  }
}

export function save({ name, address }) {
  return {
    type: SAVE,
    name,
    address,
  };
}
