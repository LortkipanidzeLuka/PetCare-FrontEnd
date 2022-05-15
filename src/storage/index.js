import { combineReducers } from 'redux';
import UserActions from 'src/storage/user/Store';

const rootReducer = combineReducers({
	user: UserActions.reducer
});

export default rootReducer;
