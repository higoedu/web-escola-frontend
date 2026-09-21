import type { Aluno, AlunoCadastro } from "../types/Aluno"
import type { Disciplina } from "../types/Disciplina"

const API_URL = "http://localhost:8080"

export async function listarAlunos(): Promise<Aluno[]> {
    const resposta = await fetch(`${API_URL}/alunos`)

    if (!resposta.ok) {
        throw new Error("Erro ao buscar alunos")
    }

    return resposta.json()
}

export async function obterAlunoPorId(id: number): Promise<Aluno> {
    const resposta = await fetch(`${API_URL}/alunos/${id}`)

    if (!resposta.ok) {
        const erro = await resposta.json()
        throw new Error(erro.message)
    }

    return resposta.json()
}

export async function alterarAluno(
    id: number,
    aluno: AlunoCadastro
): Promise<Aluno> {
    const resposta = await fetch(`${API_URL}/alunos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    })

    if (!resposta.ok) {
        const erro = await resposta.json()
        throw new Error(erro.message)
    }

    return resposta.json()
}

export async function listarDisciplinas(): Promise<Disciplina[]> {
    const resposta = await fetch(`${API_URL}/disciplinas`)

    if (!resposta.ok) {
        throw new Error("Erro ao buscar disciplinas")
    }

    return resposta.json()
}

export async function salvarAluno(aluno: AlunoCadastro): Promise<Aluno> {
    const resposta = await fetch(`${API_URL}/alunos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    })

    if (!resposta.ok) {
        const erro = await resposta.json()
        throw new Error(erro.message)
    }

    return resposta.json()
}

export async function excluirAluno(id: number): Promise<void> {
    const resposta = await fetch(`${API_URL}/alunos/${id}`, {
        method: "DELETE"
    })

    if (!resposta.ok) {
        const erro = await resposta.json()
        throw new Error(erro.message)
    }
}
