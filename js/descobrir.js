let rua = document.querySelector("#rua");
let cidade = document.querySelector("#cidade");
let uf = document.querySelector("#estado");
let btnCEP = document.querySelector("#btnDescobrirCEP");
let listaCEP = document.querySelector("#listaCEP");

btnCEP.addEventListener("click", function(e) {

    ufDescobrir = uf.value;
    cidadeDescobrir = cidade.value;
    ruaDescobrir = rua.value;
    let url = `https://viacep.com.br/ws/${ufDescobrir}/${cidadeDescobrir}/${ruaDescobrir}/json/?callback=descobrirCEP`;

    let script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
});

function descobrirCEP(resposta) {

    if (!Array.isArray(resposta)) {

        alert("Não há uma lista de CEPs válida.");
        return;
    }

    resposta.forEach(function(i) {

        let li = document.createElement("li");
        let endereco = `${i.logradouro} | ${i.complemento} | ${i.bairro} | ${i.localidade} | ${i.uf} | ${i.cep.replace("-", "")}`;
        li.innerHTML = endereco;
        listaCEP.appendChild(li);
    })
}