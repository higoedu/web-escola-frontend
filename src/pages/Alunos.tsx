import { useEffect, useState } from "react"
import { listarAlunos, listarDisciplinas, obterAlunoPorId, excluirAluno } from "../services/api"
import type { Aluno } from "../types/Aluno"
import type { Disciplina } from "../types/Disciplina"
import AlunoForm from "../components/AlunoForm"
import AlunoList from "../components/AlunoList"

function Alunos() {

    const [alunos, setAlunos] = useState<Aluno[]>([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(false)
    const [disciplinas, setDisciplinas] = useState<Disciplina[]>([])
    const [idBusca, setIdBusca] = useState("")
    const [alunoEncontrado, setAlunoEncontrado] = useState<Aluno | null>(null)
    const [erroBusca, setErroBusca] = useState("")
    const [alunoParaEditar, setAlunoParaEditar] = useState<Aluno | null>(null)

    async function buscarAluno() {
        try {
            setErroBusca("")
            setAlunoEncontrado(null)

            const aluno = await obterAlunoPorId(Number(idBusca))

            setAlunoEncontrado(aluno)
        } catch (erro) {
            if (erro instanceof Error) {
                setErroBusca(erro.message)
            } else {
                setErroBusca("Não foi possível buscar o aluno.")
            }
        }
    }

    async function carregarAlunos() {
        const dados = await listarAlunos()
        setAlunos(dados)
    }

    useEffect(() => {
        listarAlunos()
            .then((dados) => {
                setTimeout(() => {
                    setAlunos(dados)
                    setCarregando(false)
                }, 2000)
            })
            .catch((erro) => {
                console.error(erro)
                setErro(true)
                setCarregando(false)
            })

        listarDisciplinas()
            .then((dados) => {
                setDisciplinas(dados)
            })
            .catch((erro) => {
                console.error("Erro ao buscar disciplinas:", erro)
            })
    }, [])

    return (
        <div className="alunos-container">

            {carregando && (
                <p className="carregando-alunos">
                    Carregando alunos...
                </p>
            )}

            {erro && (
                <p className="erro-carregamento">
                    Não foi possível carregar os alunos.
                </p>
            )}

            {!carregando && !erro && (
                <>
                    <div className="busca-aluno">
                        <h2>Buscar aluno por ID</h2>

                        <div className="busca-aluno-campos">
                            <input
                                type="number"
                                value={idBusca}
                                onChange={(e) => setIdBusca(e.target.value)}
                                placeholder="Digite o ID"
                            />

                            <button
                                type="button"
                                className="btn-buscar"
                                onClick={buscarAluno}
                            >
                                Buscar
                            </button>
                        </div>
                    </div>

                    {erroBusca && (
                        <p className="erro-busca">
                            {erroBusca}
                        </p>
                    )}

                    {alunoEncontrado && (
                        <div className="resultado-busca">
                            <p><strong>ID:</strong> {alunoEncontrado.id}</p>
                            <p><strong>Aluno:</strong> {alunoEncontrado.aluno}</p>
                            <p><strong>Curso:</strong> {alunoEncontrado.curso}</p>
                        </div>
                    )}

                    <div>
                        <AlunoForm
                            disciplinas={disciplinas}
                            onAlunoSalvo={carregarAlunos}
                            alunoParaEditar={alunoParaEditar}
                            onCancelarEdicao={() => setAlunoParaEditar(null)}
                        />

                        <AlunoList
                            alunos={alunos}
                            onAlterar={(aluno) => setAlunoParaEditar(aluno)}
                            onExcluir={async (id) => {
                                await excluirAluno(id)
                                carregarAlunos()
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Alunos
