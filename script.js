function App() {
	this.init();
}

App.prototype.init = function () {
	new Start(document.querySelector('.musicians'));
	new AddDelMusician(document.querySelector('.my-app'));
};

window.addEventListener('DOMContentLoaded', function(){
	new App();
});