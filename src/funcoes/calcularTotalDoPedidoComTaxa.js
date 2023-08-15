export const calcularTotalDoPedidoComTaxa = (totalSemDesconto, taxa) => {
  return (totalSemDesconto * taxa).toFixed(2)
}