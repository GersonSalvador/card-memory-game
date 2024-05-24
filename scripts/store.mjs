function store () {
	const obj = window.game
	const init = (data) => {
		window.game = data;
	}
	const get = (prop) => prop ? obj[prop] : obj
	const set = (prop, value) => {
		if (obj[prop] === value) return true;
		obj[prop] = value;
		window.game = obj;
		return true;
	}
	const deleteProperty = (prop) => {
		delete obj[prop];
		window.game = obj;
		return true;
	}
	return { get, init, set, deleteProperty };
}

export { store };
