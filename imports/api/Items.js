import { Mongo } from 'meteor/mongo';

const Items = new Mongo.Collection('items');

Meteor.methods({
	insertNewItem: function (itemOne,itemTwo) {
		check(itemOne,String);
		check(itemTwo,String);

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
	},
	voteOnItem: function (item,position) {
	if(Meteor.userId()){
		if(position=='itemOne'){
		Items.update(item._id,{
			$inc:{
				 'itemOne.value':1
			}});		
	}else{
		Items.update(item._id,{
			$inc:{
				 'itemTwo.value':1
			}});	
	}
	
}
}
});



export default Items;