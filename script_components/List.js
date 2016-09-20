function List(el) {
	if (!el) return;
	this.el = el;
}

List.prototype.render = function (data) {
	for (var i = 0; i < data.length; i++) {
		this.add(data[i]);
	}
};

List.prototype.add = function (text) {
	this.el.insertAdjacentHTML('beforeend', '<li>' + text + '</li>');
};

List.prototype.remove = function (element) {
	var el = typeof element == 'string' ? document.querySelector('#' + element) : element;
	el.parentNode.removeChild(el);
};

List.prototype.getLiForDel = function () {
	return this.el.querySelectorAll('.for-del');
};

List.prototype.checkLi = function () {
	return this.el.querySelectorAll('.for-del').length !== 0 ? true : false;
};
