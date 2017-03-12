import React, {Component} from 'react';

export default class Item extends Component{
	render(){
		return(
		 <div className="item">
		 	<div className="vote-one">
		 		<span>{this.props.item.name}</span>
		 		<h3>{this.props.item.value}</h3>
		 	</div>
		 </div>
			)
	}
}