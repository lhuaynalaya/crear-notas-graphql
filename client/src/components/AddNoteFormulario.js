import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import gql from 'graphql-tag';


class AddNoteFormulario extends Component {

  state = {
    title: '',
    description: ''
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleChangeDescripcion = (e) => {
    this.setState({
      description: e.target.value
    });
  };

  render() {
  
    const { title, description } = this.state;

    const input = {
      input:{
        title,
        description
      }
    }
  
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-lg-3">
              <input 
                type="text" 
                className="form-control" 
                id="title" 
                placeholder="título"
                onChange={ (e) => this.handleChangeTitle(e) }
                value={ this.state.title }
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-3">
              <textarea 
                className="form-control" 
                id="descripcion" 
                rows="3"
                placeholder="crear una nota ..." 
                onChange={ (e) => this.handleChangeDescripcion(e) }
                value={ this.state.description }
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-3">
              <Mutation
                mutation={ADD_NOTE}
                variables={ input }
                refetchQueries={() => [{ query: GET_NOTES }]}
              >
                { addNote => <button class="btn btn-primary" onClick={ addNote }>Guardar</button>}
              </Mutation>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddNoteFormulario;

const GET_NOTES = gql`
  {
    getNotes {
      title
      description
    }
  }
`;

const ADD_NOTE = gql`
  mutation addNote($input: NoteInput) {
    addNote(input: $input) {
      title
      description
    }
  }
`;