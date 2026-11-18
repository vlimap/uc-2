// Uma empresa de entregas precisa estimar a quantidade de combustível e o custo de uma
// viagem antes da saída do veículo.

// importando a biblioteca prompt-sync
import PromptSync from "prompt-sync";

const input = PromptSync()

const nome = input("Digite o nome do motorista: ")
const distancia = input("Digite a distância:(em km) ")
const consumo = input("Digite o consumo médio do veiculo em km/L: ")
const preco = input("Digite o preço por litro:")

const litrosNecessarios = distancia / consumo
const custoTotal = litrosNecessarios * preco

console.log("Motorista: ", nome)
console.log("Distância (km):", distancia)
console.log("Consumo médio (km/L):", consumo)
console.log("Preço por litro:", preco)
console.log("Combustível necessário (L):", litrosNecessarios)
console.log("Custo estimado:", custoTotal)



