
    let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
    let el = document.querySelector('#estados');

    for(let index = 0 ; index <estados.length ; index++){
        
        let option=document.createElement("option") ;
        
        option.innerText = estados[index] ;
        
        option.value = estados[index] ;
     

        el.appendChild(option) ;
    }
 


    
    let button = document.querySelector("#buttonid")
  

    //Informacoes contidas dentro do evento pois so depois q o usuario clickar e que vai estar setados os valores
    button.addEventListener("click",function (event){
       
        let data = document.querySelector("#datainicio").value
        let array = data.split("/") //transforma a string passada em array e divide os indices pelo separador "/"
        let dia = parseInt(array[0]) //trasnforma em int e seta o dia como o primeiro indice
        let mes = parseInt(array[1])//trasnforma em int e seta o mes como o segundo indice
        let ano = parseInt(array[2])//trasnforma em int e seta o ano como o terceiro indice
        
if(!(dia > 0 && dia <=31 && mes > 0 && mes <=12 && ano >0)){ //faz a validacao se tudo for diferente(!) e exibe a mensagem de alerta
    alert("Erro")

}

    })
    
    





    
