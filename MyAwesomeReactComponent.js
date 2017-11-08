import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";

 
// const MyAwesomeReactComponent = () => (
// );

class MyAwesomeReactComponent extends React.Component
{
	constructor()
	{
		super();
		this.state = ({
			status:'start'
		});
	}

	componentWillReceiveProps(nextProps)
    {
    	this.setState ({
                status: nextProps.status.status
            })
    	// console.log("nextProps",nextProps.status.status);
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
		
		this.props.changeStatus({'status':new_message});

		// this.setState({
		// 		status:new_message
		// 	})
	}

	render()
	{
		console.log("this.state",this.state);
		return(
			  <RaisedButton label={this.state.status} primary={true} onClick={this.changeColor.bind(this)}/>
		)
	}
}

const mapStateToProps = (state) => {
	console.log("state",state);
	console.log("mapStateToProps",state);
    return{
       status: state.StartStopReducer.status
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        changeStatus: (data) => {
        	console.log("in mapDispatchToProps");
            dispatch({
	            type: 'SET_STATUS',
	            payload: data,
          });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyAwesomeReactComponent)

 
// export default MyAwesomeReactComponent;