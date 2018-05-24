const idGenerator = () => {
	let id = parseInt(new Date().getTime());
	let random = Math.floor(id + Math.random() * id);
	return id;
};
export default idGenerator;
