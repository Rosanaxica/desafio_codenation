function sendReq() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("req").innerHTML = this.responseText;
   var acessaDados=JSON.parse(this.responseText)
    console.log( acessaDados.cifrado)
    }
  };
  xhttp.open("GET", "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=7904b48e362639690cecc937b458c123b3b42499", true);
  xhttp.send();

}

function produto(array) {

  var produtoDoArray = 1;

  for (var i = 0; i < array.lenght; i++) {
    produtoDoArray = produtoDoArray * array[i];
  }
  return produtoDoArray
}



function decifra(frase) {
  var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var fraseGrande = frase.toUpperCase();
  var novaFrase = [];

  for (let index = 0; index < fraseGrande.length; index++) {
    var element = fraseGrande[index];

    if (element != ' ' && element != '.') {
      for (let index = 0; index < alfabeto.length; index++) {
        const element1 = alfabeto[index];
        if (element1 == element) {
          if (element1 == 'A' || element1 == 'B' || element1 == 'C') {
            switch (element1) {
  
              case 'A':
                novaFrase.push('X')
  
                break;
                
              case 'B':
                novaFrase.push('Y');
                break;
  
              case 'C':
                novaFrase.push('Z')
                break;
  
            }
          } else {
            novaFrase.push(alfabeto[index - 3])
          }
      
    }




      }
    }else{
      novaFrase.push(element)
    }


}
var novaFraseMesmo = novaFrase.join().toLowerCase()

console.log(sha1(novaFraseMesmo.replace(/,/g, '')));
    

 
}


