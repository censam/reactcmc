import { Meteor } from 'meteor/meteor';
import Items from '../imports/api/Items';


Meteor.startup(() => {

Items.insert({
	name:'NameKey',
	value:'NameValue'
});
	

});
