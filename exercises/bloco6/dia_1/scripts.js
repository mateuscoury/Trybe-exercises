
    let estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia"]
    let el = document.querySelector('#estados');

    for(let index = 0 ; index <estados.length ; index++){
        
        let option=document.createElement("option") ;
        
        option.innerText = estados[index] ;
        
        option.value = estados[index] ;
     

        el.appendChild(option) ;
    }
 




    
