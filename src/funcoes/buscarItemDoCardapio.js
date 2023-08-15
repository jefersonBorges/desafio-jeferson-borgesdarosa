import { Cardapio } from "../listas/cardapio.js";

export const buscarItemDoCardapio = (codigoDoItem) => {
  return Cardapio.find(item => item.codigo === codigoDoItem)
}