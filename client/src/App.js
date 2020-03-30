import React from 'react';

import AddNoteFormulario from './components/AddNoteFormulario';
import ListNotesFormulario from './components/ListNotesFormulario';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <AddNoteFormulario />
      <ListNotesFormulario />
    </div>
  );
}

export default App;
