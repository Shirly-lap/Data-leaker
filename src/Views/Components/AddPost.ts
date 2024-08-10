// import "../Pages/styles/style.css";

// export const createPost = () => {
//     const main = document.createElement("main") as HTMLElement;
//     main.className = "addPost-main container";
    

//     const section = document.createElement("section") as HTMLElement;
//     section.className = "addPost-section";

//     const h1 = document.createElement("h1") as HTMLHeadElement;
//     h1.innerText = "Agregar un post";
//     h1.className = "text-center m-5"

//     const form = document.createElement("form") as HTMLFormElement;
//     form.className = "addPost-form d-flex flex-wrap justify-content-center gap-3";
//     form.id = "#formPost"

//     const idAuthorInput = document.createElement("input") as HTMLInputElement;
//     idAuthorInput.type = "number";
//     idAuthorInput.className = "addPost-input";
//     idAuthorInput.placeholder = "Id del autor";
//     idAuthorInput.required = true;

//     const titleInput = document.createElement("input") as HTMLInputElement;
//     titleInput.type = "text";
//     titleInput.className = "addPost-input form-control fw-light";
//     titleInput.placeholder = "Titulo";
//     titleInput.required = true;

//     const plataformInput = document.createElement("input") as HTMLInputElement;
//     plataformInput.className = "addPost-input form-control fw-light";
//     plataformInput.placeholder = "Red social";
//     plataformInput.type = "text";
//     plataformInput.required = true;

//     const message = document.createElement("textarea") as HTMLTextAreaElement;
//     message.className = "addPost-textarea form-control fw-light";
//     message.placeholder = "Ingrese el mensaje";
//     message.required = true;
    
//     const postUrlInput = document.createElement("input") as HTMLInputElement;
//     postUrlInput.className = "addPost-input form-control fw-light";
//     postUrlInput.placeholder = "Url del post";
//     postUrlInput.type = "url";
//     postUrlInput.required = true;

//     const imgUrlInput = document.createElement("input") as HTMLInputElement;
//     imgUrlInput.className = "addPost-input form-control fw-light";
//     imgUrlInput.placeholder = "Url de la imagen";
//     imgUrlInput.type = "url";

//     const button = document.createElement("button") as HTMLButtonElement;
//     button.innerText = "Crear post";
//     button.className = "btn btn-success";
//     button.type = "submit";

//     form.append(titleInput,plataformInput, message, postUrlInput, imgUrlInput, button);

//     section.append(h1, form);



//     main.append(section);

//     return main
// }