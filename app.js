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
    console.log(dados)
    document.querySelector('.titulo-previsao').innerHTML = dados.name
    document.querySelector('.graus').innerHTML = `${Math.floor(dados.main.temp)}°C` 
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    document.body.style.background = `url('https://source.unsplash.com/1600x900/?${dados.weather[0].main}')`;
    document.body.style.backgroundSize = 'cover';

}

document.addEventListener("keypress", function (e){
    if(e.key === 'Enter'){
        const btn = document.querySelector(".btn");
        btn.click();
    }
});