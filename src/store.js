// 1 : import createStore from redux 
import {createStore} from 'redux';

// 2 : Initialize the store state  
const initState = {
	count : 5
};

// 3 : Create the reducer function to handle actions 
const  reducer = (state= initState, action)=> {
	console.log('action type', action.type);

	switch(action.type){
		case 'INCREMENT':
			return  Object.assign({}, state, {count: state.count+1});
		default:
			return state;
	}
}

// 4 : Create the store and export it 
const store = createStore(reducer,initState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store; 
