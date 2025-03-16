import React from "react";

// function App() {
//   const [input, setInput] = useState("");
//   const [tarefas, setTarefas] = useState([]);

//   // Carregar tarefas do localStorage
//   useEffect(() => {
//     const tarefasStorage = localStorage.getItem('@tarefa');

//     if (tarefasStorage) {
//       try {
//         setTarefas(JSON.parse(tarefasStorage));
//       } catch (error) {
//         console.error("Erro ao parsear o localStorage", error);
//       }
//     }
//   }, []);

//   // Salvar tarefas no localStorage
//   useEffect(() => {
//     if (tarefas.length > 0) {
//       localStorage.setItem('@tarefa', JSON.stringify(tarefas));
//     }
//   }, [tarefas]);

//   function handleRegister(e) {
//     e.preventDefault();

//     if (input.trim()) {
//       setTarefas([...tarefas, input]);
//       setInput('');
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Cadastro de Tarefas</h1>
//       <form onSubmit={handleRegister}>
//         <label>Nome:</label><br/>
//         <input
//           placeholder="Digite o nome da tarefa"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         /><br/>

//         <button type="submit"> Registrar</button>
//       </form>

//       <br/><br/>
//       <ol>
//         {tarefas.map((tarefa, index) => (
//           <li key={index}>{tarefa}</li>
//         ))}
//       </ol>
//     </div>
//   );
// }


// 

function App() {
  return(
    <div> Teste</div>
  )
  
}


export default App;


// https://sujeitoprogramador.com/rn-api/?api=posts