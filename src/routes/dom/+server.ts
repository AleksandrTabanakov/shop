import { json } from '@sveltejs/kit';

export function GET() {
	
	const number:number = Math.floor(Math.random() * 6) + 1;
	console.log(number);
	return json(number);
}
