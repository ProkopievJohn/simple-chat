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



// App = {
//  init: function() {
//   var list = new List();
//   var form = new Form();
//   list.on('selection-change', form.changeButtonState.bind(form));
//  }
// }

function List(el) {
	if (!el) return;
	this.events = new EventEmitter();
	this.el = el;
	this.init();
}

List.prototype = {
	init: function() {
		console.log('list init');
	},

	on: function (event, listener) {
		this.events.on(event, listener);
	},

	emit: function (event, parameters) {
		this.events.emit(event, parameters);
	},

	add: function () {
		console.log(this);
	}
}








// function List(el) {
// 	if (!el) return;
// 	this.el = el;
// 	this.eventGetLiForDel = 'listGetLiForDel'
// }

// List.prototype = {

// 	add: function (text) {
// 		this.el.insertAdjacentHTML('beforeend', '<li>' + text + '</li>');
// 	},

// 	render: function (data) {
// 		for (var i = 0; i < data.length; i++) {
// 			this.add(data[i]);
// 		}
// 	},

// 	remove: function (element) {
// 		for (var i = 0; i < element.length; i++) {
// 			var el = typeof element[i] == 'string' ? document.querySelector('#' + element[i]) : element[i];
// 			el.parentNode.removeChild(el);
// 		}
// 	},

// 	getLiForDel: function () {
// 		return this.el.querySelectorAll('.for-del');
// 	},

// 	getAllLi: function () {
// 		return this.el.querySelectorAll('li');
// 	},

// 	checkLi: function () {
// 		return this.el.querySelectorAll('.for-del').length !== 0 ? true : false;
// 	},

// 	selectUnselectAll: function () {
// 		this.getAllLi().length !== this.getLiForDel().length ? this.selectAll() : this.unSelectAll();
// 	},

// 	selectAll: function () {
// 		var allLi = this.getAllLi();
// 		for (var i = 0; i < allLi.length; i++) {
// 			allLi[i].classList.add('for-del')
// 		}
// 	},

// 	unSelectAll: function () {
// 		var allLi = this.getAllLi();
// 		for (var i = 0; i < allLi.length; i++) {
// 			allLi[i].classList.remove('for-del');
// 		}
// 	},

// 	selectOneLi: function (element) {
// 		var el = typeof element == 'string' ? document.querySelector('#' + element) : element;
// 		this.unSelectAll();
// 		this.selectLi(el);
// 	},

// 	selectLi: function (element) {
// 		var el = typeof element == 'string' ? document.querySelector('#' + element) : element;
// 		el.classList.toggle('for-del');
// 	},

// 	selectList: function (firstEl, lastEl) {
// 		this.unSelectAll();
// 		var lis = this.getAllLi();
// 		for (var i = firstEl; i <= lastEl; i++) {
// 			lis[i].classList.add('for-del');
// 		}
// 	}
// }


