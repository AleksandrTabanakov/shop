import { comments } from "../../../lib/comments";
import { json  } from "@sveltejs/kit";
export function GET(){
    return json(comments);
}

export async function POST(message){

    let {request} = message;
    let text = await request.json(); 
       
   let newComments2 = {
        id:comments.length,
       text
    }
    comments.push(newComments2);
    return json(newComments2, {status:202});
}