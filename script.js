const email = document.getElementById("user");
const  password = document.getElementById("senha");
const mensagem  = document.getElementById("erro");
const botao  = document.getElementById("enviar");


botao.addEventListener("click", () => {
    if (email || password){
    
    mensagem.innerText = "Nome de usuário ou senha incorretos!";
    
    
} 
})

