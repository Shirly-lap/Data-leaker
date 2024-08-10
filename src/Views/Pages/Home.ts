import { Guardian } from "../../Controllers/Guardian";
import { PostController } from "../../Controllers/Post.controller";
import { IPost, IResponsePost } from "../../Models/IPost";
import { createCard } from "../Components/Card";
// import { createPost } from "../Components/AddPost";

import "../Pages/styles/style.css"


export const Home = async () => {
    // let currentPage: number = 1;
    // const limit :number = 5
    Guardian()

    const main = document.createElement("main") as HTMLElement;
    main.className = "home-main"

    // main.append (createPost())

    const titulo = document.createElement("h1") as HTMLHeadElement;
    titulo.className = "text-center m-5";
    titulo.innerText = "Posts";

    const cardsContainer = document.createElement("section") as HTMLElement;
    cardsContainer.className = "cardsContainer-home d-flex flex-wrap ";

    main.append(titulo, cardsContainer)

    const url = "https://api-posts.codificando.xyz/";
    async function showPost() {
        try {
            const postController = new PostController(url)
            const dataPost: IResponsePost[] = await postController.GetAllPost("posts")

            dataPost.forEach(post => {
                const card = createCard(post)
                cardsContainer.appendChild(card)
            })
        } catch (error) {
            console.log("no fuee");
        }
    }
    await showPost()



    return main;
    

}