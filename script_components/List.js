function List(el, data) {
	if (!el || !data) return;
	this.el = el;
	this.render(data);
	this.AEL();
}

List.prototype.render = function (data) {
	var elements = '';
	for (var i = 0; i < data.length; i++) {
		elements += '<li>' + data[i] + '</li>';
	}
	this.el.querySelector('.musicians').insertAdjacentHTML('afterbegin', elements);
};

List.prototype.AEL = function () {
	var self = this;
	this.el.addEventListener('click', function(e){
		var target = e.target;
		
		if (target.tagName == 'LI') {
			self.toggle(target);
		} else if (target.classList.contains('add-btn')) {
			self.add(self.el.querySelector('.input'));
		} else if (target.classList.contains('del-btn')) {
			self.remove();
		}
	});
	this.el.addEventListener('keyup', this.checkBtn.bind(this));
};

List.prototype.checkBtn = function () {
	this.el.querySelector('.input').value !== '' ? this.el.querySelector('.add-btn').removeAttribute('disabled') :  this.el.querySelector('.add-btn').setAttribute('disabled', 'disabled');
	this.el.querySelectorAll('.for-del').length != 0 ? this.el.querySelector('.del-btn').removeAttribute('disabled') :  this.el.querySelector('.del-btn').setAttribute('disabled', 'disabled');
};

List.prototype.toggle = function (target) {
	target.classList.toggle('for-del');
	this.checkBtn();
};

List.prototype.add = function (input) {
	if (input.value == '') return;
	this.el.querySelector('.musicians').insertAdjacentHTML('beforeend', '<li>' + input.value + '</li>');
	input.value = '';
	this.checkBtn();
};

List.prototype.remove = function () {
	if (!confirm('Selected elements will be deleted. Are you sure?')) return;
	var forDel = this.el.querySelectorAll('.for-del');
	for (var i = 0; i < forDel.length; i++) {
		forDel[i].parentNode.removeChild(forDel[i]);
	}
	this.checkBtn();
};

