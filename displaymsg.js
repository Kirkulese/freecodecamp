class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.submitMessage = this.submitMessage.bind(this)
    }
    // Add handleChange() and submitMessage() methods here
    handleChange = (e) => {
      this.setState({
        input: e.target.value
      })
    }
  
    submitMessage = () => {
      this.setState({
        messages: [...this.state.messages, this.state.input],
        input: ''
      })
    }
  
  
    render() {
      const items = this.state.messages.map(e => <li>{e}</li>)
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input onChange={this.handleChange} value={this.state.input}/>
          <button onClick={this.submitMessage}> Add Message</button>
          <ul>
            {items}
          </ul>
          { /* Change code above this line */ }
        </div>
      );
    }
  };