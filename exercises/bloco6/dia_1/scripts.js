function estados(){

    let estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia"]
    let el = document.getElementById('estados');
    el.innerHTML = '';
    
     estados.forEach(element => {
     el.innerHTML += ` <option value="${element}">${element}</option>`
    //  //el.innerHTML += ' <option value="' + element + '">'+ element + '</option>'
    // });
}
