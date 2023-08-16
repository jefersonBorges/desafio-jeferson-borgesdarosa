export const validarQuantidadeDeItensDoPedido = (pedidoFormatado) => {
  
  const quantidades = pedidoFormatado.map(item => item.quantidade)

  return !(
    quantidades.includes(0)
    || quantidades.includes("0")
    || quantidades.includes("")
  )
}