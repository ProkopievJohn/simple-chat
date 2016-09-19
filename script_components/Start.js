function Start(el) {
	if (!el) return;
	this.startEl = el;
	this.musicians = ['John Lennon', 'Gary Moore', 'Steve Vai', 'Ronnie James Dio'];
	this.init();
}

Start.prototype.init = function () {
	var text = '';

	for (var i = 0; i < this.musicians.length; i++) {
		text  += '<li class="list">' + this.musicians[i] + '</li>';
	}

	this.startEl.insertAdjacentHTML('afterbegin', text);
};
