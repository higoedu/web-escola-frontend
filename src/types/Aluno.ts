export interface Aluno {
    id: number
    aluno: string
    anoIngresso: number
    curso: string
    dataIngresso: string
    semestreIngresso: number
    situacaoAluno: string
    disciplinaId: number
}

export interface AlunoCadastro {
    aluno: string
    anoIngresso: number
    curso: string
    semestreIngresso: number
    situacaoAluno: string
    disciplinaId: number
}
