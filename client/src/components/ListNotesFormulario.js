import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class ListNotesFormulario extends Component {
  render() {
    return (
      <Query query={ GET_NOTES }>
        {({ data, loading}) => {
          if (loading) return ( <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>);
          return (
            <div className="row">
              {
                data &&
                data.getNotes &&
                data.getNotes.map((item, index) =>
                <div className="col-lg-3" style={{ padding: 10 }}>
                  <div className="card" key={ index } style={{width: '18rem'}}>
                    <div className="card-body">
                      <h5 className="card-title">{ item.title }</h5>
                      <p className="card-text">{ item.description }</p>
                    </div>
                  </div>
                  </div>
                )
              }
            </div>
          );
        }}
      </Query>
    )
  }
}

export default ListNotesFormulario;

const GET_NOTES = gql`
  {
    getNotes {
      title
      description
    }
  }
`;
