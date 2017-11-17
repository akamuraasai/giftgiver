import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Presente extends Component {
  constructor() {
    super();

    this.state = { pessoa: '', objeto: '' };
  }

  render() {
    return (
      <div className='presente'>
        <Form>
          <FormGroup>
            <ControlLabel>Pessoa</ControlLabel>
            <FormControl
              className='input-person'
              onChange={evt => this.setState({ pessoa: evt.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Objeto</ControlLabel>
            <FormControl
              className='input-present'
              onChange={evt => this.setState({ objeto: evt.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className='btn-remove'
          onClick={() => this.props.removePresente(this.props.presente.id)}
        >Remover</Button>
      </div>
    );
  }
}

export default Presente;