import axios from 'axios';

export async function makeRequest(){
	const url = "https://picsum.photos/v2/list"
	let photos = await axios.get(url);
	return [...photos.data]
}

export async function fetchMore(){
	const url = "https://picsum.photos/v2/list?page=2&limit=10"
	let photos = await axios.get(url);
	return [...photos.data]
}