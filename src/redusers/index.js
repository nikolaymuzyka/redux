import { combineReducers } from 'redux';
import counter from './counter'
import procedure from './procedure';

export default combineReducers({ counter, procedure });