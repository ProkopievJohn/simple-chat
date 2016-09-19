function AddDelMusician(el) {
	if (!el) return;
	this.ADEl = el;
	this.init();
}

AddDelMusician.prototype.init = function () {
	this.ADEl.addEventListener('keyup', this.activeBtn.bind(this, this.ADEl.querySelector('.input'), this.ADEl.querySelector('.my-btn')));
	this.ADEl.addEventListener('click', this.adFunc.bind(this));
};

AddDelMusician.prototype.activeBtn = function (input, myBtn) {
	input.value !== '' ? myBtn.removeAttribute('disabled') :  myBtn.setAttribute('disabled', 'disabled');
};

AddDelMusician.prototype.adFunc = function (e) {
	var target = e.target;

	if (target.classList.contains('my-btn')) {
		this.addMusician(this.ADEl.querySelector('.input'));
	} else if (target.classList.contains('list')) {
		this.toggleClass(target, this.ADEl.querySelector('.btn-del'));
	} else if (target.classList.contains('btn-del')) {
		this.delMusician();
	}
};

AddDelMusician.prototype.addMusician = function (input) {
	if (input.value == '') return;
	document.querySelector('.musicians').insertAdjacentHTML('beforeend', '<li class="list">' + input.value + '</li>');
	input.value = '';
};

AddDelMusician.prototype.toggleClass = function (target, btnDel) {
	target.classList.toggle('for-del');

	var listForDel = this.ADEl.querySelectorAll('.for-del');
	listForDel.length !== 0 ?  btnDel.removeAttribute('disabled') :  btnDel.setAttribute('disabled', 'disabled');
};

AddDelMusician.prototype.delMusician = function () {
	if (!confirm('question')) return;
	var listForDel = this.ADEl.querySelectorAll('.for-del');
	for (var i = 0; i < listForDel.length; i++) {
		listForDel[i].parentNode.removeChild(listForDel[i]);
	}
};
