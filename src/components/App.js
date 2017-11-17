import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = { presentes: [] };
  }

  render() {
    return (
      <div>
        <h2>Meus Presentes</h2>
      </div>
    );
  }
}

export default App;