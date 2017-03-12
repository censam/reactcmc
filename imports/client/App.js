import React, {Component} from 'react';
import Items from '../api/Items';
import Item from './Item';

import { createContainer } from 'meteor/react-meteor-data';
let hello="Meteor";

class App extends Component{
	
	render(){
		return (
			<div>
			<header>
				<h1>Voting App</h1>
			</header>
			<main>
			{this.props.items.map((item)=>{
				return <Item item={item} />

			})}
			</main>
			</div>
			)
	};
} 

export default createContainer(()=>{
return {
	items:Items.find({}).fetch()
}

},App);

class Heading extends Component{
	render(){
		return <h1>{this.props.count}</h1>
	}
}