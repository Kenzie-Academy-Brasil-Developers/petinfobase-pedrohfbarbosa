import { register } from "../../scripts/api.js"


export const registerForm = () => {

  const form = document.getElementById("register-form")

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const userData = {}

    const formElements = [...form.elements]
    
    formElements.forEach((elem) => {
      if (elem.name) {
        userData[elem.name] = elem.value
      }
    })

    await register(userData)
  })
  
  

}

await registerForm()
