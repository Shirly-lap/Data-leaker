import { UserController } from "../../Controllers/User.controller";
import "../Pages/styles/style.css"


const url = "https://api-posts.codificando.xyz/"

export const Login = (): HTMLElement => {
    const main = document.createElement("main") as HTMLElement;
    main.className = "login-main container";

    const section = document.createElement("section") as HTMLElement;
    section.className = "login-section container mt-5";

    // TITULO DE LA VISTA
    const h1 = document.createElement("h1") as HTMLElement;
    h1.innerText = "Login ";
    h1.className = " text-center"

    // PARRAFO DE LA VISTA
    const p = document.createElement("p") as HTMLParagraphElement;
    p.innerText = "Pronto te unirás a nosotros"

    //Formulario
    const form = document.createElement("form") as HTMLFormElement;
    form.className = "col-4 text-center form-login"

    //Input para correo
    const emailInput = document.createElement("input") as HTMLInputElement;
    emailInput.type = "email";
    emailInput.classList.add("form-control")
    emailInput.placeholder = "Correo electronico";
    emailInput.required = true;

    //Input para conntraseña
    const passwordInput = document.createElement("input") as HTMLInputElement;
    passwordInput.className = "form-control mt-3";
    passwordInput.placeholder = "Contraseña";
    passwordInput.type = "password";
    passwordInput.required = true;

    //Botón submit
    const button = document.createElement("button") as HTMLButtonElement;
    button.innerText = "Iniciar sesión";
    button.className = "btn btn-primary mt-3 col-6";
    button.type = "submit";

    //Botón de crear cuenta
    const a = document.createElement("a") as HTMLAnchorElement;
    a.innerText = "Crear una cuenta";
    a.href = "#/signUp";
    a.className = "signUp mt-3"

    form.append(emailInput, passwordInput, button)
    section.append(h1, p, form, a)
    main.append(section)

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const user = {
            email: emailInput.value,
            password: passwordInput.value
        }

        const loginController = new UserController(url);

        try {
            const login = await loginController.Login("auth/login", user);
            console.log(login.message);
            sessionStorage.setItem("email", user.email);
            window.location.hash = "#/home"
        } catch (error) {
            console.log(error);
        }
    })
    return main
}