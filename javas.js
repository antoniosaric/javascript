


(function(){

  var myData= "my new data blah blah blah"
  var myPost = "nameKey=value&mydata="+encodeURIComponent(myData);
  console.log(myPost);

  document.getElementById('button').onclick = showData;
  function showData(){
  var httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function(){
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200){
    console.log(JSON.parse(this.responseText)[0].title)
    document.getElementById('header').append(JSON.parse(this.responseText)[0].title)

  }else if (this.readyState === XMLHttpRequest.DONE && this.status !== 200){
    console.log("ERROR");
  }

  };
    httpRequest.open('GET', 'http://jsonplaceholder.typicode.com/posts', true)
  httpRequest.send();
}
})();

