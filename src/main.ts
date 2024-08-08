import { FormSignUp } from "./Views/Pages/FormSignUp"
import { Navbar } from "./Views/Components/Navbar"

const app = document.querySelector("#app") as HTMLElement

app.append(Navbar())
app.append(FormSignUp())