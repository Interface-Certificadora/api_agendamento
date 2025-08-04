export interface DisponibilidadeFormatada {
    diaSemana: string;
    hora: string;
}
export interface AgenteDisponivelResponse {
    id: number;
    nome: string;
    ativo: boolean;
    disponibilidades: DisponibilidadeFormatada[];
    modalidades: string[];
}
