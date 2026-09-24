import type { Aluno } from "../types/Aluno"
import type { Disciplina } from "../types/Disciplina"

interface AlunoListProps {
    alunos: Aluno[]
    disciplinas: Disciplina[]
    onAlterar: (aluno: Aluno) => void
    onExcluir: (id: number) => void
}

function AlunoList({ alunos, disciplinas, onAlterar, onExcluir }: AlunoListProps) {
    function obterNomeDisciplina(id: number) {
    const disciplina = disciplinas.find(
        (disciplina) => disciplina.id === id
    )

    return disciplina?.disciplina ?? "Disciplina não encontrada"
}
    function formatarData(data: string) {
        console.log(data);
        const [ano, mes, dia] = data.substring(0, 10).split("-")
//        const [hora, minuto, segundo] = data.substring(11, 20).split(":")
    
        return `${dia}/${mes}/${ano}`// ${hora}:${minuto}:${segundo}`
    }

    return (
        <>
        <h2>Listar alunos</h2>
        <table className="alunos-tabela">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Aluno</th>
                    <th>Ano de Ingresso</th>
                    <th>Curso</th>
                    <th>Data de Ingresso</th>
                    <th>Semestre</th>
                    <th>Situação</th>
                    <th>Disciplina</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {alunos.map((aluno) => (
                    <tr key={aluno.id}>
                        <td>{aluno.id}</td>
                        <td>{aluno.aluno}</td>
                        <td>{aluno.anoIngresso}</td>
                        <td>{aluno.curso}</td>
                        <td>{formatarData(aluno.dataIngresso)}</td>
                        <td>{aluno.semestreIngresso}</td>
                        <td>{aluno.situacaoAluno}</td>
                        <td>{obterNomeDisciplina(aluno.disciplinaId)}</td>
                        <td>
                            <button
                                type="button"
                                className="btn-editar"
                                onClick={() => onAlterar(aluno)}
                            >
                                Alterar
                            </button>

                            <button
                                type="button"
                                className="btn-excluir"
                                onClick={() => {
                                    const confirmar = window.confirm(
                                        `Deseja realmente excluir o aluno ${aluno.aluno}?`
                                    )

                                    if (confirmar) {
                                        onExcluir(aluno.id)
                                    }
                                }}
                            >
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default AlunoList
