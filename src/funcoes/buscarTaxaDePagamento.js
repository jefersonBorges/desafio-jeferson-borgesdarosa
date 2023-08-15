import { buscarMetodoDePagamento } from "./buscarMetodoDePagamento.js";
import { calcularPorcentagemDaTaxa } from "./calcularPorcentagemDaTaxa.js";

export const buscarTaxaDePagamento = (codigoDoPagamento) => {

  const metodoDePagamento = buscarMetodoDePagamento(codigoDoPagamento)

  if(metodoDePagamento.hasOwnProperty('taxa')){
    
    return calcularPorcentagemDaTaxa(metodoDePagamento.taxa)
  }
  
  return 1
}