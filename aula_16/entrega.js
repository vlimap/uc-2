// Uma transportadora deseja registrar quilômetros percorridos 
// por um veículo antes da emissão de relatórios.
import PromptSync from "prompt-sync"
const input = PromptSync()

const placa = input("Digite a placa do veiculo:(FFF-1F11)")
const distancia = Number(input("Digite a distancia:"))
const numero = Number.isFinite(distancia)

console.log("Placa:", placa)
console.log("Distância (km):", distancia)
console.log("Veículo: ", placa)
console.log(`Distância: ${distancia} km`)
console.log("Número finito:", numero)