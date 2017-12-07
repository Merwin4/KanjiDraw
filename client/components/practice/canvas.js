import React, { Component } from 'react';

const canvasStyle = {border: '1px solid black'};
const fontSize = "300";

class KanjiCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '300',
      width: '300',
    }
  }
  componentDidMount() {
      this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    var ctx = this.refs.canvas.getContext('2d');
    ctx.setLineDash([15, 15]);
    ctx.beginPath();
    ctx.moveTo((parseFloat(this.state.width)/ 3), 0);
    ctx.lineTo((parseFloat(this.state.width) / 3), 300);
    ctx.stroke();
    ctx.moveTo(2*(parseFloat(this.state.width)/ 3), 0);
    ctx.lineTo(2*(parseFloat(this.state.width) / 3), 300);
    ctx.stroke();
    ctx.moveTo(0, parseFloat(this.state.height)/ 2);
    ctx.lineTo(parseFloat(this.state.width), parseFloat(this.state.height)/ 2);
    ctx.stroke();
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.font = fontSize + "px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("雪", parseFloat(this.state.width) / 2, parseFloat(this.state.height)/ 2);
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" style={canvasStyle} width={this.state.width} height={this.state.height}>Your browser doesn{"'"}t support the HTML5 canvas element</canvas>
      </div>
    );
  }
}

export default KanjiCanvas;
