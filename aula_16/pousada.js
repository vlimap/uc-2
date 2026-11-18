// A recepção precisa obter os valores necessários para o cálculo de uma
// reserva.

import PromptSync from "prompt-sync";

const input = PromptSync()

const nome = input("Digite o nome do hospede:")
const quantidade_diaria = Number(input("Quantas diarias?"))
const valor = Number(input("Digite o valor da diaria:"))

const total = quantidade_diaria * valor

console.log("Hóspede: ", nome)
console.log("Diárias: ", quantidade_diaria)
console.log("Valor da diária: ", valor)
console.log("Total bruto:", total)