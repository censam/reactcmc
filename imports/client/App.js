import React, {Component} from 'react';
import Items from '../api/Items';
import Item from './Item';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { createContainer } from 'meteor/react-meteor-data';
let hello="Meteor";

class App extends Component{
	
	addItems(event){
		event.preventDefault();
		const itemOne = this.refs.itemOne.value.trim();
		const itemTwo = this.refs.itemTwo.value.trim();
		if((itemOne != '') && (itemTwo != '')){
			Items.insert({
				itemOne:{
					text:itemOne,
					value:0
				},
				itemTwo:{
					text:itemTwo,
					value:0
				}, 
			});
			
		}
		this.refs.itemOne.value ='';
		this.refs.itemTwo.value ='';
	}
	render(){
		return (
			<div>
			<header>
				<h1>Voting App </h1> <LoginButtons />
			</header>
			<main>
				<form className="new-items" onSubmit={this.addItems.bind(this)}>
				<input type ="text" ref='itemOne'/>
				<input type ="text" ref='itemTwo'/>
				<button type ="submit" >Submit</button>
				</form>
			{this.props.items.map((item)=>{
				return <Item item={item} key={item._id} />

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