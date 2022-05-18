// função para pedir uma imagem 
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false para um pedido de assicronidade
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

// função para pegar uma imagen aleatoria
function img_aleatoria() {
    // pega o json do server
    var json = httpGet('https://dog.ceo/api/breeds/image/random');
    console.log(json);

    // decoda o json para um array
    var array = JSON.parse(json);
    console.log(array);

    // acha a imagen url do array
    var url = array.message;
    console.log(url);

    // acha o objeto da imagen
    var image = document.getElementById('Imagedog');

    // diz que deve procuarar uma url
    image.src = url;
}

//api de imagens aleatorias de: https://github.com/ElliottLandsborough