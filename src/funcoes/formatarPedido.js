export const formatarPedido = (arrayStringsDoPedido) => {

  const itens = arrayStringsDoPedido.map( item => {

    const linhaDoPedido = item.split(',')

    return {
      codigo : linhaDoPedido[0],
      quantidade: linhaDoPedido[1]
    }
    
  })

  return itens
}