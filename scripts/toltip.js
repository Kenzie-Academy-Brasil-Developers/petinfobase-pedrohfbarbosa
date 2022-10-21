export const toltip = (messageType) => {
  const toltip = document.createElement("div")
  toltip.classList.add("toltip")
 
  if (messageType == "register"){
    
    toltip.innerHTML = `
    <div class="toltip-header">
      <div class="check">        
      </div>
      <h3 class="text-2 success-1">
        Sua conta foi criada com sucesso!
      </h3>
    </div>
    <p class="text-5 gray-2"> 
      Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login: <a class="link-toltip" href="/index.html">Acessar página de login</a> 
    </p>
    `
  
  }else {
    toltip.innerHTML = `
    <div class="toltip-header">
      <div class="check">        
      </div>
      <h3 class="text-2 success-1">
        Post deletado com sucesso!
      </h3>
    </div>
    <p class="text-5 gray-2"> 
      O post selecionado para exlusão foi deletado, a partir de agora não aparecerá no seu feed  
    </p>
    `
  }

  document.querySelector("body").appendChild(toltip)
}