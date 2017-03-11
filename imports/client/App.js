import React, {Component} from 'react';

let hello="Meteor";

export default class App extends Component{
	constructor(){
		super();
		this.state = {
			count:0
		}
	}

	headingClick(){
		this.setState({count:this.state.count+1});
	}
	render(){
		return (
			<header onClick={this.headingClick.bind(this)}>
			<Heading count={this.state.count+1} />
			<Heading count={this.state.count} />
			<Heading count={this.state.count+3} />
			</header>
			)
	};
} 


class Heading extends Component{
	render(){
		return <h1>{this.props.count}</h1>
	}
}