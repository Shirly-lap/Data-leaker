import { Guardian } from "../../Controllers/Guardian";

export const Home = async () => {
    Guardian()
    const main = document.createElement("main") as HTMLElement;
    main.className = "home-main"
    main.innerText = "hola"
    return main;
}