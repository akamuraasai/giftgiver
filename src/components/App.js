import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Presente from './Presente';
import { max_number } from "../helper/index";

class App extends Component {
  constructor() {
    super();

    this.state = { presentes: [] };
  }

  addPresente = () => {
    const { presentes } = this.state;

    presentes.push({ id: max_number(this.state.presentes.map(presente => presente.id)) + 1 });
    this.setState({ presentes });
  };

  removePresente = id => {
    const presentes = this.state.presentes.filter(presente => presente.id !== id);
    this.setState({ presentes });
  };

  render() {
    return (
      <div>
        <h2>Meus Presentes</h2>
        <div className="gift-list">
          {this.state.presentes.map(presente => (
            <Presente
              key={presente.id}
              presente={presente}
              removePresente={this.removePresente}
            />
          ))}
        </div>
        <Button className="btn-add" onClick={this.addPresente}>Adicionar</Button>
      </div>
    );
  }
}

export default App;