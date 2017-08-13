//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    //create a request object
    var request = new XMLHttpRequest();
    //Captute the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = count.toString();
            }
        }
    };
    //Make a request
   request.open('GET', 'http://anusremohan.imad.hasura-app.io/counter',true);
   request.send(null);
   
};