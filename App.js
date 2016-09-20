function App() {
	this.list = new List(document.querySelector('.musicians'));
	this.form = new Form(document.querySelector('.form-musician'));
	this.init();
}

App.prototype.init = function () {
	var self = this;

	this.list.render(data);

	this.form.el.addEventListener('click', this.setOrDelArtist.bind(this));
	this.form.el.addEventListener('keyup', function (e) {
		self.setOrDelArtist(e);
		self.checkBtn(self.form.el.querySelector('.add-btn'), self.form.checkValue());
	});

	this.list.el.addEventListener('click', this.checkedLi.bind(this));
};

App.prototype.setOrDelArtist = function (e) {
	var target = e.target;

	if (target.classList.contains('add-btn') || e.keyCode == 13) {
		this.list.add(this.form.getValue());
		this.form.noValue();
		this.checkBtn(this.form.el.querySelector('.add-btn'), this.form.checkValue());
	} else if (target.classList.contains('del-btn')) {
		if (!confirm('Selected elements will be deleted. Are you sure?')) return;
		var elements = this.list.getLiForDel();
		for (var i = 0; i < elements.length; i++) {
			this.list.remove(elements[i]);
		}
		this.checkBtn(target, this.list.checkLi());
	}
};

App.prototype.checkedLi = function (e) {
	var target = e.target;

	if (target.tagName == 'LI') {
		target.classList.toggle('for-del');
	}
	this.checkBtn(this.form.el.querySelector('.del-btn'), this.list.checkLi());
};

App.prototype.checkBtn = function (btn, trueOrFalse) {
	if (!btn || typeof trueOrFalse !== 'boolean') return;
	trueOrFalse ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'disabled');
};



window.addEventListener('DOMContentLoaded', function(){
	new App();
});

var data = ['John Lennon', 'Gary Moore', 'Steve Vai', 'Ronnie James Dio'];
