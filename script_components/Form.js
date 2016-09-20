function Form(el) {
	if (!el) return;
	this.el = el;
}

Form.prototype.getValue = function () {
	return this.el.querySelector('.input').value;
};

Form.prototype.noValue = function () {
	this.el.querySelector('.input').value = '';
};

Form.prototype.checkValue = function () {
	return this.el.querySelector('.input').value !== '' ? true : false;
};
