function List(el) {
	if (!el) return;
	this.events = new EventEmitter();
	this.el = el;
	this.ctrl = false;
	this.shif = false;
	this.shiftFromTo = [];
	this.init();
}

List.prototype = {
	init: function() {
		this.el.addEventListener('click', this.delegationEventClick.bind(this));
		document.addEventListener('keyup', this.delegationEventKeyup.bind(this));
		document.addEventListener('keydown', this.delegationEventKeydown.bind(this));
	},

	on: function (event, listener) {
		this.events.on(event, listener);
	},

	emit: function (event, parameters) {
		this.events.emit(event, parameters);
	},

	delegationEventClick: function (e) {
		var target = e.target;

		if (target.tagName === 'LI' && this.ctrl) {
			this.selectEl(target);
			this.shiftFromTo[0] = Array.prototype.indexOf.call(target.parentNode.children, target);
			
		} else if (target.tagName === 'LI' && this.shif) {
			this.shiftFromTo[1] = Array.prototype.indexOf.call(target.parentNode.children, target);

			var firstIndex = this.shiftFromTo[0];
			var lastIndex = this.shiftFromTo[1];
			
			firstIndex <= lastIndex 
				? this.selectElsFromTo(firstIndex, lastIndex) 
				: this.selectElsFromTo(lastIndex, firstIndex);
			
		} else if (target.tagName === 'LI') {
			this.selectOneEl(target)
			this.shiftFromTo[0] = Array.prototype.indexOf.call(target.parentNode.children, target);
		}

		this.checkForDel(this.getElForDel().length > 0);
	},

	delegationEventKeydown: function (e) {
		if (e.keyCode === 17) {
			this.ctrl = true;
		} else if (e.keyCode === 16) {
			this.shif = true;
		}
	},

	delegationEventKeyup: function (e) {
		if (e.keyCode === 17) {
			this.ctrl = false;
		} else if (e.keyCode === 16) {
			this.shif = false;
		}
	},

	add: function (text) {
		this.checkForDel(this.getElForDel().length !== 0);
		this.el.insertAdjacentHTML('beforeend', '<li>' + text + '</li>');
	},

	render: function (items) {
		for (var i = 0; i < items.length; i++) {
			this.add(items[i]);
		}
	},

	getElForDel: function () {
		return this.el.querySelectorAll('.for-del');
	},

	getAllEl: function () {
		return this.el.querySelectorAll('li');
	},

	selectAll: function () {
		var allEl = this.getAllEl();
		for (var i = 0; i < allEl.length; i++) {
			allEl[i].classList.add('for-del')
		}
	},

	unSelectAll: function () {
		var allEl = this.getAllEl();
		for (var i = 0; i < allEl.length; i++) {
			allEl[i].classList.remove('for-del');
		}
	},

	remove: function () {
		elements = this.getElForDel();
		for (var i = 0; i < elements.length; i++) {
			elements[i].parentNode.removeChild(elements[i]);
		}
		this.checkForDel(this.getElForDel().length !== 0);
	},

	selectUnselectAll: function () {
		this.getAllEl().length !== this.getElForDel().length ? this.selectAll() : this.unSelectAll();
		this.checkForDel(this.getElForDel().length !== 0);
	},

	selectEl: function (element) {
		var el = typeof element == 'string' ? document.querySelector('#' + element) : element;
		el.classList.toggle('for-del');
	},

	selectOneEl: function (element) {
		var el = typeof element == 'string' ? document.querySelector('#' + element) : element;
		this.unSelectAll();
		this.selectEl(el);
	},

	selectElsFromTo: function (first, last) {
		if (first == undefined) return;
		if (last == undefined) last = first;
		var allEl = this.getAllEl();
		this.unSelectAll();
		
		for (var i = first; i <= last; i++) {
			allEl[i].classList.add('for-del');
		}
	},

	checkForDel: function (check) {
		this.emit('check-for-del', check);
	}
}
