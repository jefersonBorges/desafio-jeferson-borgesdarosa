export const MetodosDePagamento = [
  {
    codigo: "dinheiro",
    taxa : {
      tipo: 'desconto',
      valor : 5
    }
  },
  {
    codigo: "debito"
  },
  {
    codigo: "credito",
    taxa: {
      tipo: "acrescimo",
      valor : 3
    }
  }
]