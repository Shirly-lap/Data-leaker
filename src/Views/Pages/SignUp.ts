import Swal from "sweetalert2";
import { UserController } from "../../Controllers/User.controller";
import { IRequestUser } from "../../Models/IUser";
import "../Pages/styles/style.css";


export const FormSignUp = (): HTMLElement => {
    // MAIN DE LA VISTA DEL REGISTRAR USUARIO
    const main = document.createElement("main") as HTMLElement;
    main.className = "container";

    //SECCIÓN CONTENEDORA DEL FORMULARIO DE REGISTRO
    const section = document.createElement("section") as HTMLElement;
    section.classList.add("signUp", "container", "mt-5");


    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.innerText = "Bienvenido ";
    h1.className = " text-center"

    //Formulario
    const form = document.createElement("form") as HTMLFormElement;
    form.className = "col-4 text-center form-signUp"

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

    //Input para confirmar contraseña
    const confirmPassword = document.createElement("input") as HTMLInputElement;
    confirmPassword.className = "form-control mt-3";
    confirmPassword.placeholder = "Confirmar contraseña";
    confirmPassword.type = "password";
    confirmPassword.required = true;

    //Botón submit
    const button = document.createElement("button") as HTMLButtonElement;
    button.innerText = "Crear cuenta";
    button.className = "btn btn-primary mt-3 col-6";
    button.type = "submit";

    // Agregando inputs al formulario
    form.append(emailInput, passwordInput, confirmPassword, button)

    // Agregando titulo y formulario a sección
    section.append(h1, form)

    // Agregando la sección al main 
    main.append(section)

    form.addEventListener("submit", async (event: Event) => {
        event.preventDefault();

        const url = "https://api-posts.codificando.xyz/"
        if (passwordInput.value === confirmPassword.value) {
            const newUser: IRequestUser = {
                email: emailInput.value,
                password: passwordInput.value
            }

            const userController = new UserController(url)
            try {
                const responseNewUser = await userController.createUser("users/register", newUser)
                console.log(responseNewUser);
                window.location.href = "/";

            } catch (error) {
                form.reset()
                console.log(error);
            }

        } else {
            Swal.fire({
                title: 'Error!',
                text: "Las contraseñas no coinciden",
                icon: 'error',
                confirmButtonText: 'OK'
            });
            form.reset();
        }

    })
    return main
}