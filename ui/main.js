console.log('Loaded!');
//change text in the main div
var element = document.getElementById('main-text');
element.innerHTML = "New Value";
//move the image
var img = document.getElementById('madi');
img.onClick = function(){
    img.style.marginLeft = '1000px';
};