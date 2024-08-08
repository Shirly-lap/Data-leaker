
import Swal from "sweetalert2";
import { IRequestUser, IResponseLogin, IResponseUser } from "../Models/IUser";

export class UserController {
    url: string;

    constructor(url: string) {
        this.url = url
    }

    async CreateUser(endPoint: string, newUser: IRequestUser): Promise<IResponseUser> {
        const request = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(newUser)
        });

        switch (request.status) {
            case 201: //Registro exitoso
                const response = await request.json()
                alert("Usuario registrado")
                Swal.fire({
                    title: "Usuario registrado exitosamente",
                    icon: "success",
                    confirmButtonText: 'OK'
                });


                console.log("todo bien");


                return response;

            case 400: // Error de solicitud incorrecta (ej., datos invalidos)
                Swal.fire({
                    title: 'Error!',
                    text: "Contraseña o correo no válidos",
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                throw new Error("Email no válido o contraseña vacía");

            case 500: // El usuario ya existe
                Swal.fire({
                    title: 'Error!',
                    text: "El usuario ya existe, intenta registrar otro usuario",
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                throw new Error("No se pudo crear usuario, ya existe");

            default: // Manejo de otros códigos de estado HTTP
                Swal.fire({
                    title: 'Error!',
                    text: "Error desconocido",
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                throw new Error("Error desconocido");
        }
    }

    async Login(endPoint: string, loginUser: IRequestUser): Promise<IResponseLogin> {
        const request = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(loginUser)
        });

        const response = await request.json();

        if (response.message !== "Login successful") {
            Swal.fire({
                title: 'Error!',
                text: "No se pudo iniciar sesion verifique su correo o contraseña de nuevo",
                icon: 'error',
                confirmButtonText: 'OK'
            })
            throw new Error("No se pudo iniciar sesion verifique su correo o contraseña de nuevo");
        } else {
            Swal.fire({
                title: "Bienvenido a Data Leaker ",
                icon: "success"
            });
        }
        return response

    }
}

