import { Socket } from 'phoenix'

export function joinChannel(topic) {
	return (dispatch) => {
		const socket = new Socket('ws://127.0.0.1:4000/socket');
	  socket.connect();
	  const channel = socket.channel('chat:'+topic);
	  
	  dispatch({type: "JOIN_ATTEMPT"})

	  channel.join()
	    .receive('ok', payload => {
	      dispatch({type: "JOIN_SUCCESS", channel: channel})
	    })
	    .receive('error', reason => {
	    	dispatch({type: "JOIN_FAIL"})
	      console.log('failed join', reason)
	    })

	  channel.on('new', payload => {
	  	console.log(payload.message)
	    dispatch({type: "NEW_MESSAGE", message: payload.message})
	  })
	}
}

export function addMessage(channel, text) {
  return dispatch => {

    let payload = {
      message: text
    }

    channel.push('new', payload)
  }
}