function Form(el) {
	if (!el) return;
	this.events = new EventEmitter();
	this.el = el;
	this.btnAdd = this.el.querySelector('.add-btn');
	this.btnDel = this.el.querySelector('.del-btn');
	this.btnSelect = this.el.querySelector('.select-btn');
	this.input = this.el.querySelector('.input');
	this.init();
}


Form.prototype = {
	init: function() {
		this.el.addEventListener('click', this.delegationEventClick.bind(this));
		this.el.addEventListener('keyup', this.delegationEventKeyup.bind(this));
	},

	on: function (event, listener) {
		this.events.on(event, listener);
	},
	
	emit: function (event, parameters) {
		this.events.emit(event, parameters);
	},

	clearInputValue: function () {
		this.input.value = '';
	},

	delegationEventClick: function (e) {
		var target = e.target;

		if (target === this.btnAdd) {
			this.enterVal(this.input.value);
			this.clearInputValue();
		}

		if (target === this.btnSelect) {
			this.selectUnselectAll();
		}

		if (target === this.btnDel) {
			if (!confirm('Selected elements will be deleted. Are you sure?')) return;
			this.remove();
		}

		this.checkAddBtn();
	},

	delegationEventKeyup: function (e) {
		if (e.keyCode === 13 && this.input.value !== '') {
			this.enterVal(this.input.value);
			this.clearInputValue();
		}

		this.checkAddBtn();
	},

	enterVal: function (text) {
		this.emit('enter-value', text);
	},

	selectUnselectAll: function () {
		this.emit('select-unselect-all');
	},

	remove: function () {
		this.emit('remove-elements');
	},

	checkDelBtn: function (check) {
		check ? this.btnDel.removeAttribute('disabled') : this.btnDel.setAttribute('disabled', 'disabled');
	},

	checkAddBtn: function () {
		this.input.value === '' ? this.btnAdd.setAttribute('disabled', 'disabled') : this.btnAdd.removeAttribute('disabled');
	},

	checkSelectBtn: function (check) {
		check ? this.btnSelect.removeAttribute('disabled') : this.btnSelect.setAttribute('disabled', 'disabled');
	}
}
