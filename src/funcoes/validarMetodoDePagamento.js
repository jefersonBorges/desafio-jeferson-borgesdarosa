import { MetodosDePagamento } from "../listas/metodosDePagamento.js";

export const validarMetodoDePagamento = (metodoDePagamento) => {

  const validacao = MetodosDePagamento.find(metodo => metodo.codigo === metodoDePagamento)

  return validacao != undefined
}