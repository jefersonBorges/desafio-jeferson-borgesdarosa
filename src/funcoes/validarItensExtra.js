import { buscarItemDoCardapio } from "./buscarItemDoCardapio.js"

export const validarItensExtra = (pedidoFormatado) => {

  const itensDoPedido = []
  const itensRequeridos = []

  pedidoFormatado.forEach(itemDoPedidoFormatado => {

    const itemDoPedido = buscarItemDoCardapio(itemDoPedidoFormatado.codigo)

    if(itemDoPedido.hasOwnProperty('itemPrincipal')) {

      itensRequeridos.push(itemDoPedido.itemPrincipal)
    }

    itensDoPedido.push(itemDoPedido.codigo)
  })

  if(itensRequeridos.length > 0) {
    return [...itensDoPedido].includes(...itensRequeridos)
  }

  return true
}