function List(el) {
	if (!el) return;
	this.el = el;
	this.init();
}

List.prototype.init = function () {
	var self = this;
	this.el.addEventListener('click', function(e){
		var target = e.target;
		
		if (target.tagName == 'LI') {
			target.classList.toggle('for-del');
		}
	});
};

List.prototype.render = function (data) {
	var elements = '';
	for (var i = 0; i < data.length; i++) {
		elements += '<li>' + data[i] + '</li>';
	}
	this.el.insertAdjacentHTML('afterbegin', elements);
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
