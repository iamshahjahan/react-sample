import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
 
// const MyAwesomeReactComponent = () => (
// );

export default class MyAwesomeReactComponent extends React.Component
{
	constructor()
	{
		super();
		this.state = ({
			status:'start'
		});
	}

	changeColor()
	{
		let new_message;
		if ( this.state.status == 'start')
		{
			new_message = 'stop';
		}
		else
		{
			new_message = 'start';
		}

		this.setState({
				status:new_message
			})
	}

	render()
	{
		console.log("this.state",this.state);
		return(
			  <RaisedButton label={this.state.status} primary={true} onClick={this.changeColor.bind(this)}/>
		)
	}
}

 
// export default MyAwesomeReactComponent;