// carne - 400gr por pessoa + 6h 600gr
// cerveja - 1200 ml por pessoa + 6h  - 2000ml
//Refrigerante/Agua - 100 ml por pessoa + 6h - 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let buttonCalcular = document.querySelector("button");
let resultado = document.getElementById("resultado");

buttonCalcular.addEventListener("click", calcular);

function calcular() {
  console.log("Calculando...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne = carnePP(duracao) * adultos + carnePP(duracao) / 2 * criancas;
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  let qtdTotalBebidas = bebidasPP(duracao) * adultos + bebidasPP(duracao) / 2 * criancas;

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de carne</p>`;
  resultado.innerHTML += `<p>${qtdTotalCerveja / 1000} litros de cerveja</p>`;
  resultado.innerHTML += `<p>${qtdTotalBebidas / 1000} litros de bebidas</p>`;
  

}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
