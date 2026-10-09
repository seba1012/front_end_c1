import { useState } from 'react';
import MordorForm from '../components/MordorForm';
import MordorView from '../components/MordorView';

function MordorContainer() {
  const [guerreros, setGuerreros] = useState([]);

  const handleCreateGuerrero = (guerrero) => {
    setGuerreros([...guerreros, guerrero]);
  };

  const handleDeleteGuerrero = (nombre) => {
    const guerrerosActualizados = guerreros.filter(
      (guerrero) => guerrero.nombre !== nombre
    );
    setGuerreros(guerrerosActualizados);
  };

  return (
    <div className="container mt-5">
      <div className="col">
        <MordorForm onCreateGuerrero={handleCreateGuerrero} />
      </div>
      <div className="col mt-5">
        <MordorView guerreros={guerreros} onQuitar={handleDeleteGuerrero} />
      </div>
    </div>
  );
}

export default MordorContainer;