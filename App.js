function App() {
	this.observers =[];
	this.form = new Form(document.querySelector('.form-musician'));
	this.list = new List(document.querySelector('.musicians'), this);
	this.appEvent = 'appEvent'
	this.ctrl = false;
	this.shif = false;
	this.shiftFromTo = [];
	this.init();
}

App.prototype = {
	init: function () {
		this.form.el.addEventListener('click', this.delegationEvent.bind(this));
		document.addEventListener('keyup', this.delegationEvent.bind(this));
		document.addEventListener('keydown', this.delegationEventCtrlShif.bind(this));
		this.list.el.addEventListener('click', this.delegationEvent.bind(this));

		this.subscribe(this.form.eventSendVal, this.list.add, this.list);
		this.subscribe(this.form.eventSelectAll, this.list.selectUnselectAll, this.list);
		this.subscribe(this.appEvent, this.list.render, this.list);
		this.subscribe(this.list.eventGetLiForDel, this.form.checkDelBtn, this.form);
		this.subscribe(this.form.eventRemove, this.list.remove, this.list);
		this.notify(this.appEvent, data);
	},

	delegationEvent: function (e) {
		var target = e.target;

		if (target.classList.contains('del-btn')) {
			if (!confirm('Selected elements will be deleted. Are you sure?')) return;
			this.notify(this.form.eventRemove, this.list.getLiForDel())

		} else if (target.classList.contains('select-btn')) {

			this.notify(this.form.eventSelectAll)

		} else if (target.classList.contains('add-btn') || e.keyCode == 13) {

			this.notify(this.form.eventSendVal, this.form.getValue());
			this.form.noValue();

		} else if (e.keyCode === 17) {

			this.ctrl = false;

		} else if (e.keyCode === 16) {

			this.shif = false;

		} else if (target.tagName === 'LI' && this.ctrl) {

			this.shiftFromTo[0] = Array.prototype.indexOf.call(target.parentNode.children, target);
			this.list.selectLi(target);

		} else if (target.tagName === 'LI' && this.shif) {

			this.shiftFromTo[1] = Array.prototype.indexOf.call(target.parentNode.children, target);

			var firstIndex = this.shiftFromTo[0];
			var lastIndex = this.shiftFromTo[1];
			
			firstIndex <= lastIndex 
				? this.list.selectList(firstIndex, lastIndex) 
				: this.list.selectList(lastIndex, firstIndex);

		} else if (target.tagName === 'LI') {

			this.shiftFromTo[0] = Array.prototype.indexOf.call(target.parentNode.children, target);
			this.list.selectOneLi(target);

		}


		this.notify(this.list.eventGetLiForDel, this.list.checkLi());
	

	},

	delegationEventCtrlShif: function (e) {
		if (e.keyCode === 17) {
			this.ctrl = true;
		} else if (e.keyCode === 16) {
			this.shif = true;
		}
	},

	subscribe: function (event, callback, context) {
		var ctx = context || null;
	    if (typeof this.observers[event] !== 'object') {
			this.observers[event] = [];
		}
		this.observers[event].push({callback: callback, context: ctx});
	},

	notify: function(sEventType) {
		if (!this.observers[sEventType]) return;
		var arg = [].slice.call(arguments, 1)[0];
		var observers = this.observers[sEventType];
		for(var i = 0; i < observers.length; i++) {
			if(observers[i].callback instanceof Function) {
				observers[i].callback.call(observers[i].context, arg);
			}
		}
	}
}

window.addEventListener('DOMContentLoaded', function(){
	new App();
});

var data = ['John Lennon', 'Gary Moore', 'Steve Vai', 'Ronnie James Dio'];

	