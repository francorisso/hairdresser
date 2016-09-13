import Immutable from 'immutable';

const NAMESPACE = 'hairdresser-helper/entities';
export const MERGE = `${NAMESPACE}/merge`;

const initState = Immutable.Map();
export default function reducer (state=initState, action) {
  switch (action.type) {
    case MERGE: {
      const {entities} = action;
      return state.merge(entities);
    }
    default:
      return state;
  }
}

export function merge (entities) {
  return {
    type: MERGE,
    entities,
  };
}
