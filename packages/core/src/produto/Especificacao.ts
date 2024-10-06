export default interface Especificacao {
    destaque: string
    [chave: string]: string | number | boolean //o valor recebido vai sempre ser um desse tipo (processador, numero de serie, marca, etc)
}