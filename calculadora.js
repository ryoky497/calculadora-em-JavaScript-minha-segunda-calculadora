while (true) {

  console.log("deseja começar ou sair? ")
 let pergunta = prompt("")
  if (pergunta === "sair")
      break;

  let N1 = Number(prompt("digite o primeiro número: "))
  let N2 = Number(prompt("digite o segundo número: "))
  let operador = prompt("escolha entre +, -, * ou /: ")

      if (operador === "+") {
          console.log(N1 + N2)
      }
      else if (operador === "-") {
          console.log(N1 - N2)
      }
      else if (operador === "*") {
          console.log(N1 * N2)
      }
      else if (operador === "/") {
          if (N2 === 0) {
              console.log("impossivel realizar esta conta")
          }
          else {
              console.log(N1 / N2)
          }
      }
      else {
          console.log("impossivel realizar esta conta")
      }

}
