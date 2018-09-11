import React, { Component } from 'react';
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

	function mapStateToProps(state){
		return {
			count: state.count
		}
	}

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

export default connect(mapStateToProps,mapDispatchToProps) (Counter);