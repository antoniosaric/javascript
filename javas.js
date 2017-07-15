


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


function main() {
    
    var n = parseInt(readLine());
    var binary = (n >>> 0).toString(2);
    var count = 0;
    var highcount = 0;
    function onecount(input){

        for (var i = 0; i < binary.length; i++) {
            if(binary.charAt(i) == 1 && binary.charAt(i+1) == 1){
                count++
                count++
              if (binary.charAt(i+2) == 1){ 
                  count--
              }
            } else if (binary.charAt(i) == 0){
                    highcount = count;
                    count = 0;
            }
        }
        console.log(highcount);
    }
    onecount(binary)
    
}


