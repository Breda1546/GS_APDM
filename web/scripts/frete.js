function getValues(){
    const cidade = document.querySelector("#pesquisar").value
    sessionStorage.setItem("cidade", cidade)
}

function calcular(){
    getValues()
    let cidade = sessionStorage.getItem("cidade")
    frete = (Math.random()*10)+7,87
    alert("O frete para "+cidade+" com a Smart Delivery vai custar R$"+frete.toFixed(2))
}