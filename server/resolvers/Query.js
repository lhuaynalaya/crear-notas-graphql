import Note from '../models/Note';

const Query = {
  getNotes: async () => {
    return await Note.find();
  }
};

export default Query;