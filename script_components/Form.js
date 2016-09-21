// App = {
//  init: function() {
//   var list = new List();
//   var form = new Form();
//   list.on('selection-change', form.changeButtonState.bind(form));
//  }
// }

// function List() {
//  this.events = new EventEmitter();
// }


// List.prototype.setSelected = function(item) {
//  this.selection.push(item);
//  this.events.emit('selection-change', [this.selection]);
// }

// List.prototype.on = function(event, handler) {
//  this.events.on(event, handler)
// }




function Form(el) {
	if (!el) return;
	this.events = new EventEmitter();
	this.el = el;
	this.init();
}


Form.prototype = {
	init: function() {
		console.log('form init');
	},

	on: function (event, listener) {
		this.events.on(event, listener);
	},
	
	emit: function (event, parameters) {
		this.events.emit(event, parameters);
	},

	setSelected: function (items) {
		this.section.push(item);
		this.emit('enter-value', [this.section]);
	}
}













// function Form(el) {
// 	if (!el) return;
// 	this.el = el;
// 	this.eventSendVal = 'formSendVal';
// 	this.eventSelectAll = 'formSelectAll';
// 	this.eventRemove = 'formRemove';
// 	this.init();
// }

// Form.prototype = {
// 	init: function () {
// 		this.el.addEventListener('keyup', this.checkAddBtn.bind(this));
// 	},

// 	checkAddBtn: function () {
// 		var btn = this.el.querySelector('.add-btn');
// 		this.checkValue() ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'disabled');
// 	},

// 	checkDelBtn: function (check) {
// 		var btn = this.el.querySelector('.del-btn');
// 		check ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'disabled');
// 	},

// 	getValue: function () {
// 		return this.el.querySelector('.input').value;
// 	},

// 	noValue: function () {
// 		this.el.querySelector('.input').value = '';
// 		this.checkAddBtn();
// 	},

// 	checkValue: function () {
// 		return this.el.querySelector('.input').value !== '' ? true : false;
// 	}
// }

