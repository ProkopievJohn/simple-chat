function App () {
	this.form = new Form(document.querySelector('.form-musician'));
	this.list = new List(document.querySelector('.musicians'));
	this.events = new EventEmitter();
	this.init();
}

App.prototype = {
	init: function () {
		this.form.on('enter-value', 		this.list.add.bind(this.list));
		this.form.on('select-unselect-all', this.list.selectUnselectAll.bind(this.list));
		this.form.on('remove-elements', 	this.list.remove.bind(this.list));

		this.list.on('check-for-del', 		this.form.checkDelBtn.bind(this.form));
		this.list.on('check-for-select', 		this.form.checkSelectBtn.bind(this.form));
		this.list.render(data);
	}
}

window.addEventListener('DOMContentLoaded', function(){
	new App();
});

var data = ['John Lennon', 'Gary Moore', 'Steve Vai', 'Ronnie James Dio'];
