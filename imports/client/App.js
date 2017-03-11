import React, {Component} from 'react';

let hello="Meteor";


export default class App extends Component{

	headingClick(){
		console.log('asdf');
	}
	render(){
		return (
			<h1 onClick={this.headingClick}>Hello {hello}</h1>
			)
	};
} 