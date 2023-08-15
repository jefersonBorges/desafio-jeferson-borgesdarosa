import { buscarMetodoDePagamento } from "./funcoes/buscarMetodoDePagamento.js";
import { buscarTaxaDePagamento } from "./funcoes/buscarTaxaDePagamento.js";
import { formatarPedido } from "./funcoes/formatarPedido.js";
import { calcularTotalDoPedido } from "./funcoes/calcularTotalDoPedido.js";
import { calcularTotalDoPedidoComTaxa } from "./funcoes/calcularTotalDoPedidoComTaxa.js"
import { formatarValorDoPedido } from "./funcoes/formatarValorDoPedido.js"
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        const metodoDePagamentoFormatado = buscarMetodoDePagamento(metodoDePagamento)
        const taxaDoPagamento = buscarTaxaDePagamento(metodoDePagamentoFormatado.codigo)

        const pedidoFormatado = formatarPedido(itens)
        const valorTotalPedido = calcularTotalDoPedido(pedidoFormatado)

        const valorPedidoComTaxa = calcularTotalDoPedidoComTaxa(valorTotalPedido, taxaDoPagamento)
        const output = formatarValorDoPedido(valorPedidoComTaxa)

        return output;
    }

}

export { CaixaDaLanchonete };