import React, { Component } from 'react';
// 6: Glue component with store by using the connect function 
import {connect} from 'react-redux';

	class Counter extends Component{

		render(){
			return (
				<div>
					Counter : {this.props.count}
					<button onClick={this.props.onIncrementClick} > Increment</button>
				 </div>
			);
		}


	}
	// 7: Map the store state to the props object in the component based on the attributes you need 
	function mapStateToProps(state){
		return {
			count: state.count
		}
	}

	// 8: Map the store functions to the props object in the component based on the functions you need 
	function mapDispatchToProps(dispatch){
		return {
			onIncrementClick: () => {
				console.log('onIncrementClick');
				const action = {
					type: 'INCREMENT'
				}
				dispatch(action);
			}
		}	
	}
// 9: Last step, pass the functions in step 7 and 8 to the connect function 
export default connect(mapStateToProps,mapDispatchToProps) (Counter);
