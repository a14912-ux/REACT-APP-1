import React, { useState } from 'react';

function Notas() {
    const [formData, setFormData] = useState({
        nome_do_Aluno: '',
        disciplina: '',
        NotaDoTeste: '',
        Percentagem: '',
        testes: '',
        nota_dos_trabalhos: '',
        trabalhos: '',
        nota_das_Atitudes: ''
    });

    const [tarefas, setTarefas] = useState([]);
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setDadosSubmetidos(formData);

    }

    function limparFormulario() {
        setFormData({
            nome_do_Aluno: '',
            disciplina: '',
            NotaDoTeste: '',
            percent: '',
            testes: '',
            nota_dos_trabalhos: '',
            trabalhos: '',
            nota_das_Atitudes: ''
        });
    }

    function media() {
        const media = (formData.NotaDoTeste * formData.percent * 0.4) + (formData.testes * formData.trabalhos * 0.4) + (formData.nota_das_Atitudes * formData.trabalhosAtitudes * 0.2);
        return media;
    }

    function newtarefa() {
        limparFormulario();
    }

    function limparLista() {
        setTarefas([]);
        setDadosSubmetidos(null);
    }

    function limparDado(id) {
        setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id));
    }

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-8 form-group">
                        <label>Nome do Aluno:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.nome_do_Aluno}
                            onChange={(e) => setFormData({ ...formData, nome_do_Aluno: e.target.value })}
                            required
                        />
                    </div>
                    <div className="col-sm-4 form-group">
                        <label>Disciplina:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.disciplina}
                            onChange={(e) => setFormData({ ...formData, disciplina: e.target.value })}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 form-group">
                        <label>Nota dos Testes:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={formData.NotaDoTeste}
                            onChange={(e) => setFormData({ ...formData, NotaDoTeste: e.target.value })}
                            required
                            min="0"
                            max="20"
                            step="0.1"
                        />
                    </div>
                    <div className="col-sm-4 form-group">
                        <label>(%)Testes:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={formData.percent}
                            onChange={(e) => setFormData({ ...formData, percent: e.target.value })}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 form-group">
                        <label>Nota dos Trabalhos</label>
                        <input
                            type="number"
                            className="form-control"
                            value={formData.testes}
                            onChange={(e) => setFormData({ ...formData, testes: e.target.value })}
                            required
                            min="0"
                            max="20"
                            step="0.1"
                        />
                    </div>
                    <div className="col-sm-4 form-group">
                        <label>(%)Trabalhos:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.trabalhos}
                            onChange={(e) => setFormData({ ...formData, trabalhos: e.target.value })}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 form-group">
                        <label>Nota das Atitudes:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={formData.nota_das_Atitudes}
                            onChange={(e) => setFormData({ ...formData, nota_das_Atitudes: e.target.value })}
                            required
                            min="0"
                            max="20"
                            step="0.1"
                        />
                    </div>
                    <div className="col-sm-4 form-group">
                        <label>(%)Trabalhos:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={formData.trabalhosAtitudes}
                            onChange={(e) => setFormData({ ...formData, trabalhosAtitudes: e.target.value })}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mr-2">Calcular</button>
                    <button type="button" className="btn btn-danger mr-2"
                        onClick={limparFormulario}>Limpar</button>
            </form>

            <div className="col-12 mt-4">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Nome do Aluno:</strong> {dadosSubmetidos.nome_do_Aluno}</p>
                            <p><strong>Disciplina:</strong> {dadosSubmetidos.disciplina}</p>
                            <p><strong>Nota do Teste:</strong> {dadosSubmetidos.NotaDoTeste}</p>
                            <p><strong>Percent:</strong> {dadosSubmetidos.percent}</p>
                            <p><strong>Testes:</strong> {dadosSubmetidos.testes}</p>
                            <p><strong>Trabalhos:</strong> {dadosSubmetidos.trabalhos}</p>
                            <p><strong>Nota dos Trabalhos:</strong> {dadosSubmetidos.nota_dos_trabalhos}</p>
                            <p><strong>Atitudes:</strong> {dadosSubmetidos.nota_das_Atitudes}</p>
                            <p><strong>Nota Final:</strong> {media()}</p>
                        </div>
                    </div>
                )}

                <ul className="list-group mt-4">
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id} className="list-group-item">
                            <h5>{tarefa.nome_do_Aluno}</h5>
                            <p><strong>Disciplina:</strong> {tarefa.disciplina}</p>
                            <p><strong>Nota do Teste:</strong> {tarefa.NotaDoTeste}</p>
                            <p><strong>Percent:</strong> {tarefa.percent}</p>
                            <p>{tarefa.testes}</p>
                            <button type="button" className="btn btn-outline-danger" onClick={() => limparDado(tarefa.id)}>
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Notas;