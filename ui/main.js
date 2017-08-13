console.log('Loaded!');
//change text in the main div
var element = document.getElementById('main-text');
element.innerHTML = "New Value";
//move the image
var img = document.getElementById('madi');
var moveLeft = 0;
function moveRight(){
    moveLeft += 10;
    img.style.marginLeft = moveLeft +'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
   // img.style.marginLeft = '100px';
};