// A gráfica cobra por página e quer fazer um orçamento rápido para clientes.
import PromptSync from "prompt-sync";

const entrada = PromptSync()

const quantidade = parseInt(entrada("Digite a quantidade de páginas:"))
const preco = parseFloat(entrada("Digite o preço unitario:"))

const valor = quantidade * preco 

console.log("Total: R$", valor)