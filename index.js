var express = require("express");
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/view/'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + 'assets/'));
//Store all JS and CSS in Scripts folder.



app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/main_settings',function(req,res){
  res.sendFile('/main_settings.html');
});

app.get('/light',function(req,res){
  res.sendFile('/light.html');
});

var io = require('socket.io').listen(server);

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
	
	socket.on('powerSet', function (message) {
    console.log('A test event!  - ' + message.data);
	if (message.data == 'ON'){
		socket.broadcast.emit('auxSignal', { data: 'power_on' });
		
	}
	if (message.data == 'OFF') {
		socket.broadcast.emit('auxSignal', {data: 'power_off' });
	}
});
	
});


console.log("Running at Port 8080");