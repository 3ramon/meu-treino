export default interface User {
    readonly id: number;
    nome: string;
    email: string;
    idade: number | "";
    planoAtivo?: boolean;
}
