import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { render } from 'react-dom';
import App from '../imports/client/App';



Meteor.startup(()=>{
render(<App />,document.getElementById('render-target'));
});

