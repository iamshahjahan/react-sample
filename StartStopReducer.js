const StartStopReducer = (state={
	status:{}
},action) => {
	console.log(action.payload);
	console.log("in reducer.");
	switch(action.type)
	{

		case 'SET_STATUS':
		state = {
			...state,
			status:action.payload,
		}
		break;
	}
	return state;
}

export default StartStopReducer;