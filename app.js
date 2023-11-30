const key = "e0283766cee7e7e70be7e75409ae8042"

function buscar(){
    let cidade = document.querySelector(".input-cidade").value
    dados(cidade)
}

async function dados(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response=>Response.json());
    inserir(dados)
}

function inserir(dados){
    document.querySelector('.titulo-previsao').innerHTML = dados.name
}