import PromptSync from "prompt-sync";

const entrada = PromptSync()

const nota1 = parseFloat(entrada("Digite a primeira nota do aluno:"))
const nota2 = parseFloat(entrada("Digite a segunda nota do aluno:"))

const media = (nota1 + nota2)/2
console.log(media)
