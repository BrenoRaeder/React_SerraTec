let pessoa = {
    "nome": "Joe",
    "sobrenome": "Doe",
    "idade": "?",
    "endereco": {
        "rua": "Sao joaquim",
        "numero": 10,
        "bairro": "Mosela",
        "geral": {
            "pais": "Brasil",
            "estado": "RJ"
        }
    }
}

//mudar somente o estadoe manter o resto
var novaPessoa =  { ...pessoa, endereco: {...pessoa.endereco, geral: { ...pessoa.endereco.geral, estado: "SP"}}} ;

console.log( novaPessoa )

//

function imprimeNome({ nome, sobrenome }) {
    console.log(`${nome} ${sobrenome}`);
}

imprimeNome(pessoa);