import { QTDE_MAX_PARCELAS } from '@gstore/core'
import { CalcularParcelamento } from "@gstore/core"

export default function useParcelamento(valor: number, quantidade: number = QTDE_MAX_PARCELAS) {
    return new CalcularParcelamento().executar(valor, quantidade)
}
