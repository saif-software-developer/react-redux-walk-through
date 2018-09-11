import {createStore} from 'redux';

const initState = {
	count : 5
};

const  reducer = (state= initState, action)=> {
	console.log('action type', action.type);

	switch(action.type){
		case 'INCREMENT':
			return  Object.assign({}, state, {count: state.count+1});
		default:
			return state;
	}
}

const store = createStore(reducer,initState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store; 