function App() {
	this.init();
}

App.prototype.init = function () {
	new List(document.querySelector('.my-app'), data);
};

window.addEventListener('DOMContentLoaded', function(){
	new App();
});

var data = ['John Lennon', 'Gary Moore', 'Steve Vai', 'Ronnie James Dio'];
