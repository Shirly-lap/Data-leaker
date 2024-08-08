// COMPONENTE NAVBAR 
export const Navbar = (): HTMLElement => {

    const header = document.createElement("header") as HTMLElement;

    const nav = document.createElement("nav") as HTMLElement;
    nav.classList.add("navbar", "bg-body-tertiary", "navbar-expand-lg")

    const div = document.createElement("div") as HTMLElement;
    div.className = "container-fluid";

    const a = document.createElement("a") as HTMLAnchorElement;
    a.classList.add("navbar-brand", "d-flex", "align-items-center");
    a.href = "/"

    const img = document.createElement("img")
    img.src = "./public/post.png"
    img.classList.add("d-inline-block", "align-text-top")
    img.width = 50
    img.height = 50

    const span = document.createElement("span") as HTMLSpanElement;
    span.classList.add("navbar-brand", "p-2", "h1", "mb-0")
    span.innerText = "Data Laker"

    const ul = document.createElement("ul") as HTMLUListElement;
    ul.classList.add("nav",  "nav-underline");
    ul.innerHTML = `

    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#/agregar-post" >Agregar post</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#" id="logout" >Cerrar sesión</a>
    </li>
    `
    const logout = ul.querySelector("#logout") as HTMLAnchorElement;
    logout.addEventListener("click", ()=>{
        sessionStorage.removeItem("email");
    })

    a.append(img, span)
    div.append(a, ul)

    nav.append(div)

    header.append(nav)

    return header;
}