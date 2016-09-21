function EventEmitter() {
	this.events = {};
}

EventEmitter.prototype.on = function(event, listener) {
	if (typeof this.events[event] !== 'object') {
		this.events[event] = [];
	}

	this.events[event].push(listener);
}

EventEmitter.prototype.emit = function (event, parameters) {
	if (typeof this.events[event] !== 'object') return;

	var listeners = this.events[event].slice(),
		length = listeners.length;

	for(var i = 0; i < length; i++) {
		listeners[i].call(this, parameters)
	}
};
