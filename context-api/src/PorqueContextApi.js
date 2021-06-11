import { useState } from 'react';
import Alunos from './components/Alunos';

function PorqueContextApi() {
  const [nomeAluno, setNomeAluno] = useState('LUCAS OLIVEIRA');


  return (
    <div>
      <h1>ESCOLA</h1>
      <hr />

      <Alunos nome={nomeAluno} mudaNome={setNomeAluno} />
    </div>
  );
}

export default PorqueContextApi;
