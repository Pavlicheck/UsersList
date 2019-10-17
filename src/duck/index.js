import { combineReducers } from 'redux';
import users from './users/reducer';

export default reducer => combineReducers({
  users: users
})