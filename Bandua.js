var img = document.getElementById('shit');
var im = document.getElementById('ps');
img.addEventListener('click', suktis, false);
function suktis() {
    var deg = 500 + Math.round(Math.random() * 500);

    var css = '-webkit-transform: rotate(' + deg + 'deg);';

    im.setAttribute(
        'style', css
    );
}