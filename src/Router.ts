import { Navbar } from "./Views/Components/Navbar";
import { Home } from "./Views/Pages/Home";
import { Login } from "./Views/Pages/Login";
import { SignUp } from "./Views/Pages/SignUp";

export const Router = async () =>{
    let {hash} = location;

    const containerApp = document.querySelector("#app") as HTMLElement
    //preparamos y limpiamos la vista para renderizar las demas
    containerApp.innerHTML = "";
    

    if (hash == "" || hash =="/") {
        containerApp.append(Login())
    } 
    
    else if (hash == "#/signUp"){
        containerApp.append(SignUp())
    }

    else if(hash == "#/home"){
        containerApp.append(Navbar(), await Home())
    }

    else if(hash == "#/agregar-post"){
        containerApp.append(Navbar(), await Home())
    }
}