import { MetodosDePagamento } from "../listas/metodosDePagamento.js";

export const buscarMetodoDePagamento = (codigoDoPagamento) => {

  return MetodosDePagamento.find(metodo => metodo.codigo === codigoDoPagamento)
}