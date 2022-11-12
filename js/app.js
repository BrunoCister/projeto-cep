let cep = document.querySelector("#cep");
let rua = document.querySelector("#rua");
let complemento = document.querySelector("#complemento");
let bairro = document.querySelector("#bairro");
let cidade = document.querySelector("#cidade");
let estado = document.querySelector("#estado");
let btn = document.querySelector("#btn");

//cep.value = "22750013";

btn.addEventListener("click", function(e) {

    let cepPesquisa = cep.value;
    let script = document.createElement("script");
    script.src = `https://viacep.com.br/ws/${cepPesquisa}/json/?callback=preencherForm`;
    document.body.appendChild(script);
});

function preencherForm(resposta) {

    if ("erro" in resposta) {

        alert("CEP não encontrado.");
        return;
    }

    console.log(resposta);
    rua.value = resposta.logradouro;
    complemento.value = resposta.complemento;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}