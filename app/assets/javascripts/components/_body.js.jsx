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
        <AllItems items={this.state.items} handleDelete={this.handleDelete}/>
        <NewItem handleSubmit={this.handleSubmit}/>
        </div>
    )
  },
  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },
  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
  });
  this.setState({ items: newItems });
  },
  handleDelete(id) {
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: "DELETE",
      success:() => {
        this.removeItemClient(id);
      }
    });
  },

});
