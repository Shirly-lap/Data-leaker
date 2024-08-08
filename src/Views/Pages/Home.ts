import { Guardian } from "../../Controllers/Guardian";
import { PostController } from "../../Controllers/Post.controller";
import { IPost } from "../../Models/IPost";
import { createCard } from "../Components/Card";

export const Home = async () => {
    Guardian()

    const main = document.createElement("main") as HTMLElement;
    main.className = "home-main"

    const titulo = document.createElement("h1") as HTMLHeadElement;
    titulo.className = "lead";
    titulo.innerText = "Posts";

    const cardsContainer = document.createElement("section") as HTMLElement;
    cardsContainer.className = "cardsContainer-home d-flex flex-wrap ";

    main.append(titulo, cardsContainer)

    const url = "https://api-posts.codificando.xyz/";
    async function showPost() {
        try {
            const postController = new PostController(url)
            const dataPost: IPost[] = await postController.GetByPostId("posts")

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