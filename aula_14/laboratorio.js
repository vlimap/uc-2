import PromptSync from "prompt-sync";

const entrada = PromptSync()

const temperatura = entrada("Digite uma temperatura:")

const temp_ajustada = Number(temperatura.replace(",", "."))
console.log("Temperatura (°C):", temperatura)
console.log(`Temperatura registrada: ${temp_ajustada}°C`)