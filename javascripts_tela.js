// funçõa que busca os dados do cep do correios 
// inspidada na aula do yt https://www.youtube.com/watch?v=nJtwKUQkAGo
function buscacep(){
    // pegando os dados do campo do cep da pagina do html
    let cep = document.getElementById('campo_cep').value
    if(cep != ""){
        // acessando o site que pega as informações do correios e adicionando o valor que o ususario digitou
        let url = "https://brasilapi.com.br/api/cep/v1" + cep;
        //chamando uma requisição no site 
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();
        // tratar a resposta da requisição
        req.onload = function(){
            //verificando se a função funcionou
            if(req.status === 200){
                let endereco = JSON.parce(req.response);
                //local do endereco
                document.getElementById('campo_endereco').value = endereco.street;
                //local do bairro
                document.getElementById('campo_bairro').value = endereco.neighborhood;
                //local da cidade
                document.getElementById('campo_cidade').value = endereco.city;
                //local do estado
                document.getElementById('campo_estado').value = endereco.state;
            }
            // caso de erro na busca das informações do cep aparecera um aviso
            else if(req.status == 404){
                alert("CEP invalido")
            }
            else{
                alert("Erro no CEP digitado")
            } 
        }
    }
}

window.onload = function(){
    let campo_cep = document.getElementById("campo_cep");
    //o evento so acontece quando o usuario tira o cursor do campo do cep
    campo_cep.addEventListener("blur",buscacep)

}