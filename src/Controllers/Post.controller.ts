import { IPost, IResponsePost } from "../Models/IPost";

export class PostController {
    url: string;

    constructor(url: string) {
        this.url = url
    }

    async GetAllPost (endPoint:string){
        const request = await fetch(`${this.url}${endPoint}`)
        const response = await request.json()

        if (request.status !=200) {
            throw new Error("No se puede mostrar los posts")
        }

        return response;
    }


    // async createPost(endPoint : string, post:IPost) {
    //     const response = await fetch(`${this.url}${endPoint}`,{
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'Application/json',
    //             'x-user-email': `${sessionStorage.getItem("email")}`
    //         },
    //         body: JSON.stringify(post)
    //     });
    //     console.log("POST OK" + response.status);

    //     if (!response.ok) {
    //         throw new Error('Error al crear el post');
    //     }

    //     return await response.json();
    // }

    // async getPostsByCreatorId(endpoint: string, creatorId: number): Promise<IResponsePost[]> {
    //     const response = await fetch(`${this.url}${endpoint}/by-creator/${creatorId}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'x-user-email': `${sessionStorage.getItem("email")}`
    //         }
    //     });

    //     if (!response.ok) {
    //         throw new Error('Error al obtener los posts del creador');
    //     }

    //     return await response.json();
    // }

}