const nome = "trickão";
let nome2 = ""; 
let pessoaDefault = {
    nome: "Patrick",
    idade: "19",
    trabalho: "Programador"
}

let nomes = ["patrick", "dodô", "glaub"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Patrick",
        idade: "19",
        trabalho: "Programador"   
    },
{
        nome: "dodô",
        idade: "20",
        trabalho: "Gamer😎"
},
{
        nome: "Glaub",
        idade: "19",
        trabalho: "vida ganha"
}

];

function alteraNome() {
    nome2 = "Glaub";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome (novoNome) {
    nome2 = novoNome
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho)

}


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("----------IMPRIMIR PESSOAS--------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log (item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho)


    
    })    
}

    imprimirPessoas();

    

    adicionarPessoa({
        nome: "mayumi",
        idade: "21",
        trabalho: "Porteira",
    });
   

    imprimirPessoas();

    
  

    //imprimirPessoa(pessoaDefault);

    //imprimirPessoa({
    //    nome: "dodô",
    //    idade: "20",
    //    trabalho: "Gamer😎"
    //})



//recebeEalteraNome("João Paulo");
//recebeEalteraNome("Glaub");//

//alterarNome();

