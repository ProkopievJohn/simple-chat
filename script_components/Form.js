function Form(el) {
	if (!el) return;
	this.el = el;
	this.eventSendVal = 'formSendVal';
	this.eventSelectAll = 'formSelectAll';
	this.init();
}

Form.prototype = {
	init: function () {
		this.el.addEventListener('keyup', this.checkAddBtn.bind(this));
	},

	checkAddBtn: function () {
		var btn = this.el.querySelector('.add-btn');
		this.checkValue() ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'disabled');
	},

	checkDelBtn: function (check) {
		var btn = this.el.querySelector('.del-btn');
		check ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'disabled');
	},

	getValue: function () {
		return this.el.querySelector('.input').value;
	},

	noValue: function () {
		this.el.querySelector('.input').value = '';
		this.checkAddBtn();
	},

	checkValue: function () {
		return this.el.querySelector('.input').value !== '' ? true : false;
	}
}