import React, { Component } from 'react';
import KanjiCanvas from './canvas';

class PracticePage extends Component {

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <KanjiCanvas />
      </div>
    )
  }
}

export default PracticePage;
