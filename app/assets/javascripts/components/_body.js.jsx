var Body = React.createClass({
  getInitialState() {
    return  { items: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState( { items: response } ) });
  },
  render () {
    return (
      <div>
        <AllItems items={this.state.items}/>
        <NewItem handleSubmit={this.handleSubmit}/>
        </div>
    )
  },
  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }
});
