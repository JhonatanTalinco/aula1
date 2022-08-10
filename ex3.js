pacientes = ["Jose da Silva","Carlos de Souza", "Aline Ferreira", "Ana Paula"];
idades = [27,28,33,26];
peso = [83.5,80.1,63.7,55.0]
altura = [1.70,1.76,1.53,1.62]

resultado1 = peso[0]/altura[0]**2
resultado2 = peso[1]/altura[1]**2
resultado3 = peso[2]/altura[2]**2
resultado4 = peso[3]/altura[3]**2

console.log("O resultado do paciente " + pacientes[0] + ' tem o IMC de ' + resultado1)
console.log("O resultado do paciente " + pacientes[1] + ' tem o IMC de ' + resultado2)
console.log("O resultado do paciente " + pacientes[2] + ' tem o IMC de ' + resultado3)
console.log("O resultado do paciente " + pacientes[3] + ' tem o IMC de ' + resultado4)