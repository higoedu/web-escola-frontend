import { useEffect, useState } from "react"
import type { Disciplina } from "../types/Disciplina"
import type { Aluno } from "../types/Aluno"
import { salvarAluno, alterarAluno } from "../services/api"

interface AlunoFormProps {
    disciplinas: Disciplina[]
    onAlunoSalvo: () => void
    alunoParaEditar?: Aluno | null
    onCancelarEdicao: () => void
}

function AlunoForm({ disciplinas, onAlunoSalvo, alunoParaEditar, onCancelarEdicao }: AlunoFormProps) {
    const [aluno, setAluno] = useState("")
    const [anoIngresso, setAnoIngresso] = useState("")
    const [semestreIngresso, setSemestreIngresso] = useState("")
    const [situacaoAluno, setSituacaoAluno] = useState("")
    const [curso, setCurso] = useState("")
    const [disciplinaId, setDisciplinaId] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [erro, setErro] = useState("")

    useEffect(() => {
        if (alunoParaEditar) {
            setAluno(alunoParaEditar.aluno)
            setAnoIngresso(String(alunoParaEditar.anoIngresso))
            setSemestreIngresso(String(alunoParaEditar.semestreIngresso))
            setSituacaoAluno(alunoParaEditar.situacaoAluno)
            setCurso(alunoParaEditar.curso)
            setDisciplinaId(String(alunoParaEditar.disciplinaId))
        }
    }, [alunoParaEditar])    

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
    
        const disciplinaSelecionada = disciplinas.find(
            (disciplina) => disciplina.id === Number(disciplinaId)
        )
    
        if (!disciplinaSelecionada) {
            setErro("Disciplina é obrigatória!")
            setMensagem("")
            return
        }
    
        const novoAluno = {
            aluno,
            anoIngresso: Number(anoIngresso),
            curso,
            semestreIngresso: Number(semestreIngresso),
            situacaoAluno,
            disciplinaId: Number(disciplinaId),
        }

        console.log("Semestre enviado:", semestreIngresso)
    
        try {
            const salvo = alunoParaEditar
                ? await alterarAluno(alunoParaEditar.id, novoAluno)
                : await salvarAluno(novoAluno)
        
            console.log("Aluno salvo:", salvo)
        
            setMensagem("Aluno cadastrado com sucesso!")
            setErro("")
        
            onAlunoSalvo()
            onCancelarEdicao()
        
            setAluno("")
            setAnoIngresso("")
            setSemestreIngresso("")
            setSituacaoAluno("")
            setCurso("")
            setDisciplinaId("")
        } catch (erro) {
            console.error(erro)
        
            if (erro instanceof Error) {
                setErro(erro.message)
            } else {
                setErro("Não foi possível cadastrar o aluno.")
            }
        
            setMensagem("")
        }
    }

    return (
        <div>
            <h2>{alunoParaEditar ? "Alterar aluno" : "Cadastrar aluno"}</h2>

            {mensagem && <p>{mensagem}</p>}

            {erro && <p>{erro}</p>}
    
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Aluno:</label>
                    <input
                        type="text"
                        value={aluno}
                        onChange={(e) => setAluno(e.target.value)}
                    />
                </div>
        
                <div>
                    <label>Ano de ingresso:</label>
                    <input
                        type="number"
                        value={anoIngresso}
                        onChange={(e) => setAnoIngresso(e.target.value)}
                    />
                </div>
        
                <div>
                    <label>Semestre:</label>
                    <select
                        value={semestreIngresso}
                        onChange={(e) => setSemestreIngresso(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="1">1º semestre</option>
                        <option value="2">2º semestre</option>
                    </select>
                </div>
        
                <div>
                    <label>Situação:</label>
                    <select
                        value={situacaoAluno}
                        onChange={(e) => setSituacaoAluno(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="Ativo">Ativo</option>
                        <option value="Inativo">Inativo</option>
                    </select>
                </div>
                
                <div>
                    <label>Curso:</label>
                    <input
                        type="text"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                </div>
        
                <div>
                    <label>Disciplina:</label>
        
                    <select
                        value={disciplinaId}
                        onChange={(e) => setDisciplinaId(e.target.value)}
                    >
                        <option value="">Selecione uma disciplina</option>
        
                        {disciplinas.map((disciplina) => (
                            <option key={disciplina.id} value={disciplina.id}>
                                {disciplina.disciplina}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className={alunoParaEditar ? "btn-editar" : "btn-cadastrar"}
                >
                    {alunoParaEditar ? "Alterar" : "Cadastrar"}
                </button>
            </form>
        </div>
    )
}

export default AlunoForm
