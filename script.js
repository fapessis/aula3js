// const cor = prompt("Digite uma cor: \nVERMELHO\nAMARELO\nVERDE");

// switch(cor.toUpperCase()){
//     case 'VERMELHO':
//         console.log("PARE!");
//         break;
//     case 'AMARELO':
//         console.log("ATENÇÃO!");
//         break;
//     case 'VERDE':
//         console.log("PROSSIGA!");
//         break;
//     default:
//         console.log("VALOR INVÁLIDO");
    
// }

let contador = 0
let nota = 0
while (true) {
     let menu = Number(prompt("Escolha uma opção:\n1-Adicionar nota\n2-Sair"));

     if (menu === 2){
        break;
    } else if (menu === 1) {
            nota += Number(prompt(`Digite a nota: `));
            contador ++

    } else {
        console.log("Opção inválida!")
    }
   
}

if(nota>0){
    console.log(`A média das notas é: ${nota/contador}`)
} else {
    console.log("Você não digitou nenhuma nota!")
}