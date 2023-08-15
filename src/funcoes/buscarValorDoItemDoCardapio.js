
export const buscarValorDoItemDoCardapio = (itemDoCardapio) => {

  if(itemDoCardapio.hasOwnProperty('valor')) {

    return itemDoCardapio.valor
  }
  
  return 0
}