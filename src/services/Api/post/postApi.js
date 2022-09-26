import { getApi } from "../../genericservices"
// rimanda tutti i post
export async function getPosts(){
    return await getApi('posts')
}
// rimanda il singolo post e passa il parametro
export async function getPost(id){
    return await getApi(`posts/${id}`)
}
// rimanda i commenti di un post 
export async function getPostComments(id){
    return await getApi(`posts/${id}/comments`)
}