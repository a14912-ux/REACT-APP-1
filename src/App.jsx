import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Mensagem from './Mensagem';
import Alerta from './Alerta';
//import Contador from './Contador';
//import Formulario from './Formulario';
//import Tarefas from './Tarefas';
import Notas from './Notas';


function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-left text-secundary">Cálculo da nota final!</h1>
      <p className="lead text-left">
        Dados dos alunos.
      </p>
      {/* Evento onClick em React usa camelCase e chama uma função */}
      {/*<button
        className="btn btn-success d-block mx-auto"
        onClick={() => alert('Olá, Arantes!')}
      >
        Clica-me!
      </button>*/}

      {/*<Contador />*/}

      {/* Cada componente recebe props diferentes */}
      {/*<Mensagem mytext="Bem-vindo à tua primeira aplicação React!" />
      <Mensagem mytext="Os componentes permitem reutilizar código!" />*/}


      {/*<Alerta tipo="success" texto="Este é uma alerta de sucesso 67!" />*/}
      <Notas/>
      {/*<Formulario/>*/}
      {/*<Tarefas/>*/}
 
    </div>
  );
}

export default App