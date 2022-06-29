class Pessoa {
    nome: string
    idade: number
    profissao: profissao

    constructor(nome: string, idade: number, profissao: profissao) {
    this.nome = nome,
    this.idade = idade,
    this.profissao = profissao
    }
}    

type profissao = "atriz" | "padeiro";

let pessoa1 = new Pessoa("maria", 29, "atriz");
let pessoa2 = new Pessoa("roberto", 19, "padeiro");
let pessoa3 = new Pessoa("laura", 32, "atriz");
let pessoa4 = new Pessoa("carlos", 19, "padeiro");