import { FormSignUp } from "./Views/Pages/SignUp"
import { Navbar } from "./Views/Components/Navbar"

const app = document.querySelector("#app") as HTMLElement

app.append(Navbar())
app.append(FormSignUp())