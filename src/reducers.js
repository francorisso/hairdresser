import { combineReducers } from 'redux';
import personal from './ducks/personal';
import services from './ducks/services';
import settings from './ducks/settings';

export default {
  personal,
  services,
  settings,
};
