import PromptSync from "prompt-sync";

const input = PromptSync()

const peso = Number(input("Digite o peso em KG: "))
const altura = Number(input("Digite a altura em M:"))

const imc = peso / (altura ** 2)

console.log("Peso (kg):", peso)
console.log("Altura (m):", altura)
console.log("IMC:", imc.toFixed(2))

