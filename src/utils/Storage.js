const storage = (key) => ({
	get: () => {
		const item = localStorage.getItem(key);
		return typeof item === 'object' ? JSON.parse(item) : item;
	},
	set: (data) => {
		const set = typeof data === 'object' ? JSON.stringify(data) : data;
		localStorage.setItem(key, set);
		return set;
	},
	unset: () => localStorage.removeItem(key),
	isSet: () => !!localStorage.getItem(key)
});

export default storage;
