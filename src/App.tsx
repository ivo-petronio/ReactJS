import { useState } from 'react';

interface AlunoProps {
  name: string;
  age: number;
}

function App() {

  return (
    <div>
      <Input />
    </div>
  )

  function Input() {

    const [input, setInput] = useState("");
    const [idade, setIdade] = useState("");

    const [aluno, setAluno] = useState<AlunoProps>();

    const [contador, setContador] = useState(0);

    const [user, setUser] = useState<string>("visitante");
  
    return (
        <div className="container">
            <input
            name = "nomeAluno"
            placeholder = "Digite o nome"
            value = {input}
            onChange = { e => setInput(e.target.value)}
            />
            <br />
            <br />
            <input
            name = "idadeAluno"
            placeholder = "Digite a idade"
            value = {idade}
            onChange = { e => setIdade(e.target.value)}
            />
            
            <button onClick={mostraAluno}> Mostra entrada </button>
            <h1> {aluno?.name} </h1>
            <h3> {aluno?.age} </h3>
            <br />
            <br />
            <hr></hr>
            <h1> Contador com useState </h1>
            <button onClick={adicionar}> + </button> {contador} <button onClick={subtrair}> - </button>
            <br />
            <hr></hr>
            <br />
            <button onClick={handleLogin}> ::Entrar:: </button>
            <br />
            <h3>Olá, {user} </h3>
        </div>
    )
  
    function mostraAluno() {
        setAluno({
          name: input,
          age: parseInt(idade)
        })
    }

    function adicionar() {
      setContador(valorAtual => valorAtual + 1);
    }

    function subtrair() {
      if (contador === 0) return;
      else setContador(valorAtual => valorAtual - 1);
    }

    function handleLogin() {
      setUser("Ivo Petrônio");
    }
  }
}

export default App
