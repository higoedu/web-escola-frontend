import type { Disciplina } from "./Disciplina"

export interface Aluno {
    id: number
    aluno: string
    anoIngresso: number
    curso: string
    dataIngresso: string
    semestreIngresso: number
    situacaoAluno: string
    disciplina: Disciplina
}

export interface AlunoCadastro {
    aluno: string
    anoIngresso: number
    curso: string
    dataIngresso: string
    semestreIngresso: number
    situacaoAluno: string
    disciplina: Disciplina
}
