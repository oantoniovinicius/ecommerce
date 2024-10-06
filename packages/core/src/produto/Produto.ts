import Especificacao from "./Especificacao"
import Precificavel from "./Precificavel"


export default interface Produto extends Precificavel { //herda valores 
    id: number
    nome: string
    descricao: string
    marca: string
    modelo: string
    imagem: string
    videoReview: string
    nota: number
    tags: string[]
    especificacoes: Especificacao //todos os produtos tem especificacoes 
}