import { login } from "../../scripts/api.js"

export const loginForm = () => {

  const form = document.getElementById("login-form")

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const userData = {}

    const formElements = [...form.elements]
    
    formElements.forEach((elem) => {
      if (elem.name) {
        userData[elem.name] = elem.value
      }
    })

    await login(userData)
  })
}

loginForm()

