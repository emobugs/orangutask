import EventEmitter from 'eventemitter3';

export default class Application extends EventEmitter {
	static get events() {
		return {
			READY: 'ready',
		};
	}

	constructor() {
		super();
		this.emojis = [];
		this.banana = '🍌';
		this.emit(Application.events.READY);
	}
	setEmojis(emojis) {
		this.emojis = emojis;

		this.addBananas();
		const p = document.createElement('p');
		p.textContent = this.emojis;

		document.querySelector('#emojis').appendChild(p);
		console.log(p.textContent);
	}

	addBananas() {
		this.emojis = this.emojis.map((emoji) => {
			return (emoji += this.banana);
		});
	}
}
