import React, { useState } from 'react'

function ApiUseState() {

  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React Hooks'
  ]);

  const [input, setInput] = useState('');

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicinar Tarefa</button>

    </div>
  );
}

export default ApiUseState;
