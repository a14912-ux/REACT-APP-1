import { useState } from 'react'

function Notas() {

    const [formData, setFormData] = useState({
        NomeDoAluno: '',
        Disciplina: '',
        NotaDosTestes: '',
        Testes: '',
        NotaDosTrabalhos: '',
        Trabalhos: '',
        NotaDasAtitudes: '',
        Atitudes: ''
    });

    const [notas, setNotas] = useState([]);

    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos


        const novaNota = {
            id: Date.now(),
            NomeDoAluno: formData.NomeDoAluno,
            Disciplina: formData.Disciplina,
            NotaDosTestes: formData.NotaDosTestes,
            Testes: formData.Testes,
            NotaDosTrabalhos: formData.NotaDosTrabalhos,
            Trabalhos: formData.Trabalhos,
            NotaDasAtitudes: formData.NotaDasAtitudes,
            Atitudes: formData.Atitudes
        };
        setNotas([...notas, novaNota]);
    }

    function eliminaNotas() {

        setNotas([]);
        setNotas(notas.filter((nota) => nota.id !== id));
    }

    function newNota() {
        const novaNota = {
            id: Date.now(),
            NomeDoAluno: 'Arantes',
            Disciplina: 'Programação',
            NotaDosTestes: '0',
            Testes: '2',
            NotaDosTrabalhos: '2',
            Trabalhos: '3',
            NotaDasAtitudes: '19',
            Atitudes: '2'
        };
        setFormData(novaNota);
        setNotas([...notas, novaNota]);
        setDadosSubmetidos(null);
    }

    function eliminaNotas() {

        setNotas([]);
        setNotas(notas.filter((nota) => nota.id !== id));
    }

    function Calcular() {

        return formData.NotaDosTestes * 0.40 + formData.NotaDosTrabalhos * 0.40 + formData.NotaDasAtitudes * 0.20;
    }

    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ id: '', NomeDoAluno: '', Disciplina: '', NotaDosTestes: '', Testes: '', NotaDosTrabalhos: '', Trabalhos: '', NotaDasAtitudes: '', Atitudes: '' });
        setDadosSubmetidos(null);
    }

    return (
        
        <div className="mt-4 row">

            <div className="w-100">
                <h1>Cálculo da nota final</h1>
                <h2>Dados do Aluno</h2> 
            </div>

            <form className="col-12 row" onSubmit={handleSubmit}>
                <div className="col-8">
                        <div className="form-group">
                            <label>Nome do Aluno</label>
                            <input type="text" className="form-control" value={formData.NomeDoAluno} onChange={(e) =>
                                setFormData({ ...formData, NomeDoAluno: e.target.value })} required />
                        </div>
                </div>

                <div className="col-4">
                        <div className="form-group">
                            <label>Disciplina</label>
                            <input type="text" className="form-control" value={formData.Disciplina} onChange={(e) =>
                                setFormData({ ...formData, Disciplina: e.target.value })} required />
                        </div>
                </div>

                <div className="col-3">
                        <div className="form-group">
                            <label>Nota dos Testes</label>
                            <input type="number" className="form-control" step="1" min="0" max="20" value={formData.NotaDosTestes} onChange={(e) =>
                                setFormData({ ...formData, NotaDosTestes: e.target.value})} required />
                        </div>

                        <div className="form-group">
                            <label>Nota dos Trabalhos:</label>
                            <input type="number" className="form-control" step="1" min="0" max="20"value={formData.NotaDosTrabalhos} onChange={(e) =>
                                setFormData({ ...formData, NotaDosTrabalhos: e.target.value })} required />
                        </div>

                        <div className="form-group">
                            <label>Nota das Atitudes:</label>
                            <input type="number" className="form-control" step="1" min="0" max="20"value={formData.NotaDasAtitudes} onChange={(e) =>
                                setFormData({ ...formData, NotaDasAtitudes: e.target.value })} required />
                        </div>

                        <button type="button" className="btn btn-primary mr-2" onClick={verResultados}>Calcular</button>
                        <button type="button" className="btn btn-outline-danger" onClick={limparFormulario}>Limpar Formulário</button>
                </div>

                <div className="col-3">
                        <div className="form-group">
                            <label>(%) Testes</label>
                            <input type="number" className="form-control" step="1" min="0" max="100" value={formData.percTestes} onChange={(e) =>
                                setFormData({ ...formData, percTestes: e.target.value })} required />
                        </div>

                        <div className="form-group">
                            <label>(%) Trabalhos:</label>
                            <input type="number" className="form-control" step="1" min="0" max="100" value={formData.percTrabalhos} onChange={(e) =>
                                setFormData({ ...formData, percTrabalhos: e.target.value })} required />
                        </div>

                        <div className="form-group">
                            <label>(%) Atitudes:</label>
                            <input type="number" className="form-control" step="1" min="0" max="100" value={formData.percAtitudes} onChange={(e) =>
                                setFormData({ ...formData, percAtitudes: e.target.value })} required />
                        </div>

                        <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Nome:</strong> {dadosSubmetidos.titulo}</p>
                            <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                            <p><strong>Descrição:</strong> {dadosSubmetidos.descricao}</p>
                            
                        </div>
                    </div>
                )}

                <ul className="list-group mt-4">
                    {notas.map(nota => (
                        <li key={nota.id} className="list-group-item">
                            <h5>{nota.titulo}</h5>
                            <p>{nota.data}</p>
                            <p>{nota.descricao}</p>
                            <button className="btn btn-danger" onClick={() => eliminaTarefa(nota.id)}>Eliminar</button>

                </div>

            </form>

        </div>
    );
}

export default Notas;
 
