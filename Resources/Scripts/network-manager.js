/*
const socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
const logger = document.getElementById("log");

function submit(input) {
    if(event.key === "Enter") {
        send(input.value);
        input.value = "";
    }
}

// Socket open.
socket.onopen = function(e) {
	log("Connection to server established.");
};

// Recieved
socket.onmessage = function(event) {
	log("Received: " + event.data);
};

// Socket closed.
socket.onclose = function(event) {
	if (event.wasClean) {
		log("Connection closed cleanly. Code = " + event.code + ", Readson = " + event.reason);
	} else {
		log("ERROR: Connection died"); // e.g. server process killed or network down (event.code is usually 1006 in this case)s
	}
};

// Socket error.
socket.onerror = function(error) { log("ERROR: " + error.message); };

function send(message) {
	log("Sending: " + message);
	socket.send(message);
}

function log(value) {

	let p = document.createElement("p");
	p.innerText = value;

	if(logger != null) { logger.append(p); }
}*/