import Note from '../models/Note';
import { rejects } from 'assert';

const Mutation = {
  addNote: async (_, { input }) => {
    const note = new Note({
      title: input.title,
      description: input.description
    });

    return new Promise((resolve, object) => {
      note.save((error) => {
        if(error) rejects(error)
        else resolve(note)
      })
    });
  }
};

export default Mutation;
