function AddDelMusician(el) {
	if (!el) return;
	this.ADEl = el;
	this.init();
}

AddDelMusician.prototype.init = function () {

	this.ADEl.addEventListener('click', this.adFunc.bind(this))
};

AddDelMusician.prototype.adFunc = function (e) {
	var target = e.target;

	if (target.classList.contains('my-btn')) {
		this.addMusician(this.ADEl.querySelector('.input'));
	} else if (target.classList.contains('list')) {
		target.classList.toggle('for-del');
	} else if (target.classList.contains('btn-del')) {
		this.delMusician();
	}
};

AddDelMusician.prototype.addMusician = function (input) {
	if (input.value == '') return;

	document.querySelector('.musicians').insertAdjacentHTML('beforeend', '<li class="list">' + input.value + '</li>');

	input.value = '';
};

AddDelMusician.prototype.delMusician = function () {
	var listForDel = this.ADEl.querySelectorAll('.for-del');

	for (var i = 0; i < listForDel.length; i++) {
		listForDel[i].parentNode.removeChild(listForDel[i]);
	}
};
