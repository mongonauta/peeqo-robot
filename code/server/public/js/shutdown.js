$(document).ready(function(){

	var socket_url = 'http://localhost:3000'

	var socket = io(socket_url + '/controlpanel')

	$("body").on("click","#shutdown", function(event){
		event.preventDefault();

		socket.emit("shutdown","yes")
	})

})