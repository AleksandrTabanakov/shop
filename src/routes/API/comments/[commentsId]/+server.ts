import { comments } from "../../../../lib/comments";
import { json  } from "@sveltejs/kit";
export function GET(requestUrl){

    let {params} = requestUrl;
    let {commentsId} = params;
  
    return json(comments.find(item=>item.id===Number(commentsId)));
}


export async function PATCH(requestUrl){

    let {params} = requestUrl;
    let {commentsId} = params;
    let {request} = requestUrl; 
    let text = await request.json(); 
    let ind = comments.findIndex(item=>item.id===Number(commentsId))
    comments[ind].text =  text.text;
  
    return json(comments[ind]);
}

export async function DELETE(requestUrl){
    let {params} = requestUrl;
    let {commentsId} = params;; 
    let ind = comments.findIndex(item=>item.id===Number(commentsId))
    comments.splice(ind,1);
  
    return json(comments[ind]);
}
