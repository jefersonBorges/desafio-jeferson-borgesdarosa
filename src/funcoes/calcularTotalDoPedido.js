import { buscarItemDoCardapio } from "./buscarItemDoCardapio.js"
import { buscarValorDoItemDoCardapio } from "./buscarValorDoItemDoCardapio.js"
import { calcularTotalDoItem } from "./calcularTotalDoItem.js"

export const calcularTotalDoPedido = (pedidoFormatado) => {

  const totaisItens = pedidoFormatado.map(item => {

    const itemDoCardapio = buscarItemDoCardapio(item.codigo)
    const valorItem = buscarValorDoItemDoCardapio(itemDoCardapio)

    return calcularTotalDoItem(valorItem, item.quantidade)
  })

  const valorInicial = 0.00
  const total = totaisItens.reduce((total, valor) => {return total + valor}, valorInicial)

  return total
}