/*Adicionar Figuras */
/* 1º Criar os objetos/arrays para os elementos que serão manipulados:*/
const array_img_figuras = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')
/*2º Criar novos objetos para serem manipulados: */
const obj_img_nova = document.createElement('img')


/* 3º Adicionar os eventos para chamar a função: */
for (obj_img of array_img_figuras){
  obj_img.addEventListener('click', 
  function() {FunAdicionaFigura(this.src, this.alt)}
  )

}

/* 4º Declarar a função para executar as ações: */
function FunAdicionaFigura(param_src, param_alt){
  obj_img_nova.setAttribute('src', 'Imagens/Botões/' + param_alt + '.jpg' )
  obj_img_nova.setAttribute('alt', param_alt)
  obj_img_nova.setAttribute('title', param_alt)
  obj_div_adiciona_figura.appendChild(obj_img_nova)
}

/* Botão enviar Formulário */

const obj_termo = document.querySelector("#termo")
const obj_nome = document.querySelector("#nome")
const obj_email = document.querySelector("#email")
const obj_idade = document.querySelector("#idade")
const obj_hist = document.querySelector("#hist")
const obj_file = document.querySelector("#file")
const obj_botao = document.querySelector("#botao")

/* Evento */
obj_botao.addEventListener('click', FunEnviar)

function FunEnviar(){
  if(obj_nome.value == "" || obj_email.value == "" || obj_idade.value == "" || obj_hist.value == "" || obj_file.value == "" || !obj_termo.checked){
    alert("Por favor, preencha todos os campos a cima")
}
  else{
    obj_botao.value = "Enviado";
    obj_botao.disabled = true;
  }


}

/*Insere a img */
obj_file.addEventListener('change', FunFile)

function FunFile(e){
  const tgt = e.target || window.event.srcElement

  const files = tgt.files

  const fr = new FileReader()

  fr.onload = function(){
    document.querySelector("#preview_image").src = fr.result
  }

  fr.readAsDataURL(files[0])
}