import Swal from "sweetalert2";

export function Guardian() {
    const user = sessionStorage.getItem("email")
    if (!user) {
        Swal.fire({
            title: 'Error!',
            text: "Debes iniciar sesión",
            icon: 'error',
            confirmButtonText: 'OK'
        });

        window.location.hash = "#/";
    }
}

export function Logout() {
    sessionStorage.removeItem("email");
    window.location.hash = "#/"
}