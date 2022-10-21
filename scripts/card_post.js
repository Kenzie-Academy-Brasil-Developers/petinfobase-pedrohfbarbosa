export const transformDate = (date) => { 
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  let dateObj = new Date(date)

  let month = months[dateObj.getUTCMonth()]

  let year = dateObj.getUTCFullYear()

  return `${month} de ${year}`
}

export const createCard = (e, user) => {
  const card = document.createElement("li")
  card.classList.add("card")

  const cardHeader = document.createElement("div")
  cardHeader.classList.add("card-header")

  cardHeader.insertAdjacentHTML("afterbegin", 
  `
  <div class="card-header-info">

    <div class="card-header-info-name">

      <div class="card-header-info-avatar">
        <img src="${e.user.avatar}" alt="${e.user.username}">
      </div>
      <h4 class="text-4 gray-1"> 
        ${e.user.username}
      </h4>

    </div>

    <span class="text-4 gray-4">
      ${transformDate(e.createdAt)}
    </span>

    </div>
    `
  )

  const btnsHeader = document.createElement("div")
  btnsHeader.classList.add("btns-header")

  const btnEdit = document.createElement("button")
  btnEdit.classList.add("btn-card")
  btnEdit.setAttribute("data-control-edit", `${e.id}`)
  btnEdit.innerText = "Editar"
  if (user.email == e.user.email){
    btnEdit.disabled = false
    btnEdit.classList.remove("btn-disabled")
  }else {
    btnEdit.disabled = true
    btnEdit.classList.add("btn-disabled")
  }

  const btnDelete = document.createElement("button")
  btnDelete.classList.add("btn-card")
  btnDelete.setAttribute("data-control-remove", `${e.id}`)
  btnDelete.innerText = "Excluir"
  if (user.email === e.user.email){
    btnDelete.disabled = false
    btnDelete.classList.remove("btn-disabled")
  }else {
    btnDelete.disabled = true
    btnDelete.classList.add("btn-disabled")
  }

  btnsHeader.append(btnEdit, btnDelete)

  cardHeader.appendChild(btnsHeader)

  const h3 = document.createElement("h3")
  h3.className = "title-2 gray-1"
  h3.innerText = e.title

  const p = document.createElement("p")
  p.className = "text-3 gray-3"
  if (e.content.length <= 145){
    p.innerText = e.content
  }else {
    p.innerText = `${e.content.substring(0, 145)}...`
  }

  const btnAccessPost = document.createElement("button")
  btnAccessPost.classList.add("access-post")
  btnAccessPost.setAttribute("data-control-modal", `${e.id}`)
  btnAccessPost.innerText = "Acessar publicação"

  card.append(cardHeader, h3, p, btnAccessPost)

  return card
}

export const renderCards = (posts, user) => {
  const ul = document.querySelector(".cards-wrapper")
  ul.innerHTML = ""
  
  posts.forEach(post => ul.appendChild(createCard(post, user)))
}

export const avatarAdd = (user) => {
  document.getElementById("avatar-header-img").src = user.avatar
}