 function enviarFormulario() {
    //Capturar os valores e criar variavel para os objetos JSON

    var contaClinte = new Object(); 

   contaClinte.nome = document.getElementById('nome').value

   contaClinte.cpf = document.getElementById('cpf').value

   contaClinte.email = document.getElementById('email').value

     contaClinte.contato = document.getElementById('contato').value

     contaClinte.agencia = document.getElementById('agencia').value

     contaClinte.destino = document.getElementById('destino').value

     contaClinte.objetivo = document.getElementById('objetivo').value

     contaClinte.quandodessejair = document.getElementById('quandoDesejaIr').value
    

    


     //Converter para STRING JSON 
   var myJSON = JSON.stringify(contaClinte) //cria o texto colorido

  console.log(myJSON) //escreve o texto
  console.log(contaClinte.valueOf())


}

function fff(){


    console.log('estudar')
    console.log(contaClinte.valueOf())
}
