import React from 'react';

import Header from './components/header/header.jsx';
import Form from './components/form/form.jsx';
import Footer from './components/footer/footer.jsx';

import './App.scss';

// NOTE:
// this.setState() always takes in what is to become the NEXT state

// class Header extends React.Component {
//   render() {
//     return (
//       <h1>This is the react version...</h1>
//     );
//   }
// }

// let something = new Header();
// let output = something.render();
// output goes into #root

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      words: "Type Something...",
      formValues: {}
    };
  }

  handleIncrement = () => {
    // this.state.clicks++;
    let clicks = this.state.clicks + 1;
    this.setState({ clicks });
    // this.setState({ ...state, clicks:clicks })
  }

  handleChangeInput = (e) => {
    let fieldName = e.target.name;
    let value = e.target.value;
    let formValues = { ...this.state.formValues, [fieldName]: value }
    this.setState({ formValues });

    // superagent.post('/api/person').send(this.state.formValues)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, words: this.state.formValues.words })
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <Form />
        </div>
        <Footer />
      </>
    );
  }

}

export default App;