import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      items: [],
      input:'',
      isEditing: false,
    }
  }

  onEditing = () => {
    this.setState({isEditing: true})
    }
  onChange = e =>{
    this.setState({input: e.target.value})
  }
  onClick =() =>{}
  onSubmit = e => {
    e.preventDefault();
    this.setState({items: this.state.items.concat(this.state.input), input:''});
  }
  onDelete = () => {}

  render(){
    return(
    <form id="todo-list" onSubmit={this.onSubmit}>
      {this.state.items.length > 0?
      this.state.items.map((item) => {
        return(
            <sapn className="todo-wrap">
              <span>
                <input type="checkbox" />
                <label for="1" className="todo"><i className="fa fa-check"></i></label>
              </span>
              <span className="delete-item" title="remove">
                <i className="fa fa-times-circle"></i>
              </span>
            </sapn>
        )
      }):<p></p>}
      {this.state.isEditing ?<span className="todo-wrap"><input  onChange={this.onChange} value={this.state.input} /></span>:''}
    <div id="add-todo" onClick={this.onEditing}><i className="fa fa-plus"></i> &nbsp; Add an item</div>
    </form>
    
    )
  }
}

export default App;