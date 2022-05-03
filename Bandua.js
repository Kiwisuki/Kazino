var img = document.getElementById('shit');
var im = document.getElementById('ps');
img.addEventListener('click', suktis, false);
var array = Array["Ruletė", "Monetos Metimas", "Fortūnos Ratas", "Sprogimas", "Lošimo automatas"];
function suktis() {
    var deg = 500 + Math.round(Math.random() * 500);

    var css = '-webkit-transform: rotate(' + deg + 'deg);';

    im.setAttribute(
        'style', css
    );
}

funtion AI(){
    var array = array[Math.floor(Math.random()*array.length)];
    document.getElementById("demo").innerHTML = array;
}
