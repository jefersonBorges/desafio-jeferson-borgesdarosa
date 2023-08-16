import { buscarItemDoCardapio } from "./buscarItemDoCardapio.js";

export const validarCodigoDoItemDoPedido = (pedidoFormatado) => {
  const codigos = pedidoFormatado.map(item => buscarItemDoCardapio(item.codigo))

  return !codigos.includes(undefined)
}