const toBase64 = file => new Promise((resolve, reject) => {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = () => resolve(reader.result);
	reader.onerror = error => reject(error);
});


export const TransformImageArrToBase64 = async (data) => {
	let res = [];
	for (var i = 0; i < data.length; i++) {
		const cont = await toBase64(data[i])
		res = [...res, {
			title: data[i].name,
			isPrimary: i === 0,
			content: cont
		}];
	}
	return res;
};
