function List(el) {
	if (!el) return;
	this.el = el;
	this.eventGetLiForDel = 'listGetLiForDel'
}

List.prototype = {

	add: function (text) {
		this.el.insertAdjacentHTML('beforeend', '<li>' + text + '</li>');
	},

	render: function (data) {
		for (var i = 0; i < data.length; i++) {
			this.add(data[i]);
		}
	},

	remove: function (element) {
		var el = typeof element == 'string' ? document.querySelector('#' + element) : element;
		el.parentNode.removeChild(el);
	},

	getLiForDel: function () {
		return this.el.querySelectorAll('.for-del');
	},

	getAllLi: function () {
		return this.el.querySelectorAll('li');
	},

	checkLi: function () {
		return this.el.querySelectorAll('.for-del').length !== 0 ? true : false;
	},

	selectUnselectAll: function () {
		this.getAllLi().length !== this.getLiForDel().length ? this.selectAll() : this.unSelectAll();
	},

	selectAll: function () {
		var allLi = this.getAllLi();
		for (var i = 0; i < allLi.length; i++) {
			allLi[i].classList.add('for-del')
		}
	},

	unSelectAll: function () {
		var allLi = this.getAllLi();
		for (var i = 0; i < allLi.length; i++) {
			allLi[i].classList.remove('for-del');
		}
	},

	selectOneLi: function (element) {
		var el = typeof element == 'string' ? document.querySelector('#' + element) : element;
		this.unSelectAll();
		this.selectLi(el);
	},

	selectLi: function (element) {
		var el = typeof element == 'string' ? document.querySelector('#' + element) : element;
		el.classList.toggle('for-del');
	},

	selectList: function (firstEl, lastEl) {
		this.unSelectAll();
		var lis = this.getAllLi();
		for (var i = firstEl; i <= lastEl; i++) {
			lis[i].classList.add('for-del');
		}
	}
}
