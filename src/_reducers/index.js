import { combineReducers } from 'redux';

import { friends } from './friends.reducer'


const rootReducer = combineReducers({
    friends
});

export default rootReducer;