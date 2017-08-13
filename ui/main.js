console.log('Loaded!');
//change text in the main div
var element = document.getElementByID('main-text');
element.innerHTML = "New Value";
//move the image
var img = document.getElemetByID('madi');
img.onClick = function(){
    img.style.marginLeft = '100px';
};