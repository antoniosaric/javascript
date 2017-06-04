


(function(){


  // console.log(myPost);

  document.getElementById('button').onclick = showData;
  function showData(){
    var myData = document.getElementById('ktext').value; 
    var nameKey = document.getElementById('dtext').value; 

    var myPost = "nameKey="+encodeURIComponent(nameKey)+"&mydata="+encodeURIComponent(myData);
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(){
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200){
        console.log(JSON.parse(this.responseText)[0].title)
        document.getElementById('header').append(JSON.parse(this.responseText)[0].title)
        document.getElementById('header').innerHTML = response.name + "<br>" + response.data + "<br>" + response.response;
      }else if (this.readyState === XMLHttpRequest.DONE && this.status !== 200){
        console.log("ERROR");
      }

    };
    httpRequest.open('POST', 'ph.php', true)
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(myPost);
  }
})();

