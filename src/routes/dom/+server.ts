import { json } from '@sveltejs/kit';

export function GET() {
	
	const number:number = Math.floor(Math.random() * 6) + 1;
	return json(number);
}
