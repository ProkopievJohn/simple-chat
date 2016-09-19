function App() {
	this.list = new List(document.querySelector('.musicians'));
	this.form = new Form(document.querySelector('.form-musician'));
	this.init();
}

App.prototype.init = function () {
	this.list.render(data);

	this.form.el.addEventListener('click', this.setOrDelArtist.bind(this));
	this.form.el.addEventListener('keyup', this.checkAddBtn.bind(this));

	this.list.el.addEventListener('click', this.checkedLi.bind(this));
};

App.prototype.setOrDelArtist = function (e) {
	var target = e.target;

	if (target.classList.contains('add-btn')) {
		this.list.add(this.form.getValue());
		this.form.noValue();
		this.checkAddBtn(target);
	} else if (target.classList.contains('del-btn')) {
		if (!confirm('Selected elements will be deleted. Are you sure?')) return;
		var elements = this.list.getLiForDel();
		for (var i = 0; i < elements.length; i++) {
			this.list.remove(elements[i]);
		}
		this.checkDelBtn();
	}
};

App.prototype.checkedLi = function (e) {
	var target = e.target;

	if (target.tagName == 'LI') {
		target.classList.toggle('for-del');
	}
	this.checkDelBtn();
};


App.prototype.checkAddBtn = function () {
	var trueOrFalse = this.form.checkValue(),
		btn = this.form.el.querySelector('.add-btn');
	if (typeof trueOrFalse !== 'boolean') return;
	trueOrFalse ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'disabled');
};

App.prototype.checkDelBtn = function () {
	var trueOrFalse = this.list.getLiForDel().length === 0 ? false : true,
		btn = this.form.el.querySelector('.del-btn');
	trueOrFalse ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'disabled');
};



window.addEventListener('DOMContentLoaded', function(){
	new App();
});

var data = ['John Lennon', 'Gary Moore', 'Steve Vai', 'Ronnie James Dio'];
