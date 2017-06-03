window.onload = function() {
var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts';
var method = 'GET';

http.open(method, url);
http.onreadystatechange = function(){
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
    console.log(JSON.parse(http.responseText)[0])
    document.getElementById("apple").append(JSON.parse(http.responseText)[0]["title"]);
  }else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200){
    console.log("ERROR");
  }
};
http.send();
}