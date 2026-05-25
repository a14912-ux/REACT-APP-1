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
        Atitudes: '',
        Trabalhos: ''
    });

    const [notas, setNotas] = useState([]);

    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    


        return (
            <div className="container mt-4">

            </div>
        )
    }

    export default Notas;