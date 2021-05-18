import React from 'react';
import './form.scss';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.urlElement = React.createRef();
    this.state = {
      input: '',
      url: '',
    }
  }


  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleUrl = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    await this.setState({ url: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleUrl}>
          <div>
            <input onChange={this.handleInput} type="text" value={this.state.input} />
          </div>
          <div>
            <p>{this.state.url} {this.state.input}</p>
          </div>
        </form>
        <form>
          <button type="radio" id="butt" onClick={this.handleUrl} value="GET">GET</button>
          <button type="radio" id="butt" onClick={this.handleUrl} value="POST">POST</button>
          <button type="radio" id="butt" onClick={this.handleUrl} value="PUT">PUT</button>
          <button type="radio" id="butt" onClick={this.handleUrl} value="DELETE">DELETE</button>
          <button >GO</button>
        </form>
        <dev>
        </dev>
      </div>
    )
  }
};

export default Form;
