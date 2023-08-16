import { validarMetodoDePagamento } from "./funcoes/validarMetodoDePagamento.js";
import { Mensagens } from "./listas/mensagens.js";
import { buscarMetodoDePagamento } from "./funcoes/buscarMetodoDePagamento.js";
import { buscarTaxaDePagamento } from "./funcoes/buscarTaxaDePagamento.js";
import { formatarPedido } from "./funcoes/formatarPedido.js";
import { validarCarrinho } from "./funcoes/validarCarrinho.js";
import { validarCodigoDoItemDoPedido } from "./funcoes/validarCodigoDoItemDoPedido.js";
import { validarQuantidadeDeItensDoPedido } from "./funcoes/validarQuantidadeDeItensDoPedido.js";
import { validarItensExtra } from "./funcoes/validarItensExtra.js";
import { calcularTotalDoPedido } from "./funcoes/calcularTotalDoPedido.js";
import { calcularTotalDoPedidoComTaxa } from "./funcoes/calcularTotalDoPedidoComTaxa.js"
import { formatarValorDoPedido } from "./funcoes/formatarValorDoPedido.js"
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        if(!validarMetodoDePagamento(metodoDePagamento)) { return Mensagens.pagamentoInvalido }

        const metodoDePagamentoFormatado = buscarMetodoDePagamento(metodoDePagamento)
        const taxaDoPagamento = buscarTaxaDePagamento(metodoDePagamentoFormatado.codigo)
        const pedidoFormatado = formatarPedido(itens)

        if(!validarCarrinho(pedidoFormatado)) { return Mensagens.faltouItemNoCarrinho }
        if(!validarCodigoDoItemDoPedido(pedidoFormatado)) { return Mensagens.itemInvalido }
        if(!validarQuantidadeDeItensDoPedido(pedidoFormatado)) { return Mensagens.quantidadeZerada }
        if(!validarItensExtra(pedidoFormatado)){ return Mensagens.faltouItemPrincipal }

        const valorTotalPedido = calcularTotalDoPedido(pedidoFormatado)
        const valorPedidoComTaxa = calcularTotalDoPedidoComTaxa(valorTotalPedido, taxaDoPagamento)

        return formatarValorDoPedido(valorPedidoComTaxa)
    }

}

export { CaixaDaLanchonete };