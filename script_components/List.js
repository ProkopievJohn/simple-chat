function List(el) {
	if (!el) return;
	this.events = new EventEmitter();
	this.el = el;
	this.init();
}

List.prototype = {
	init: function() {
		this.el.addEventListener('click', this.delegationEvent.bind(this));
	},

	on: function (event, listener) {
		this.events.on(event, listener);
	},

	emit: function (event, parameters) {
		this.events.emit(event, parameters);
	},

	delegationEvent: function (e) {
		var target = e.target;

		if (target.tagName === 'LI') {
			this.selectOneLi(target)
		}

		this.checkForDel(this.getLiForDel().length > 0);
	},

	add: function (text) {
		this.el.insertAdjacentHTML('beforeend', '<li>' + text + '</li>');
	},

	render: function (items) {
		for (var i = 0; i < items.length; i++) {
			this.add(items[i]);
		}
	},

	getLiForDel: function () {
		return this.el.querySelectorAll('.for-del');
	},

	getAllLi: function () {
		return this.el.querySelectorAll('li');
	},

	selectAll: function () {
		var allLi = this.getAllLi();
		for (var i = 0; i < allLi.length; i++) {
			allLi[i].classList.add('for-del')
		}
	},

	unSelectAll: function () {
		var allLi = this.getAllLi();
		for (var i = 0; i < allLi.length; i++) {
			allLi[i].classList.remove('for-del');
		}
	},

	remove: function () {
		elements = this.getLiForDel();
		for (var i = 0; i < elements.length; i++) {
			elements[i].parentNode.removeChild(elements[i]);
		}
	},

	selectUnselectAll: function () {
		this.getAllLi().length !== this.getLiForDel().length ? this.selectAll() : this.unSelectAll();
		this.checkForDel(this.getAllLi().length === this.getLiForDel().length);
	},

	selectLi: function (element) {
		var el = typeof element == 'string' ? document.querySelector('#' + element) : element;
		el.classList.toggle('for-del');
	},

	selectOneLi: function (element) {
		var el = typeof element == 'string' ? document.querySelector('#' + element) : element;
		this.unSelectAll();
		this.selectLi(el);
	},

	checkForDel: function (check) {
		this.emit('check-for-del', check);
	}
}








// function List(el) {
// 	if (!el) return;
// 	this.el = el;
// 	this.eventGetLiForDel = 'listGetLiForDel'
// }

// List.prototype = {


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


// 	selectList: function (firstEl, lastEl) {
// 		this.unSelectAll();
// 		var lis = this.getAllLi();
// 		for (var i = firstEl; i <= lastEl; i++) {
// 			lis[i].classList.add('for-del');
// 		}
// 	}
// }


