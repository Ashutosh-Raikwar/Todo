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
  onClick = id =>{
    console.log(id);
  }
  onSubmit = e => {
    e.preventDefault();
    const items= {id: new Date().getTime(), text : this.state.input, isCompleted: false}
    this.setState({items: this.state.items.concat(items), input:''});
  }
  onDelete = () => {}

  render(){
    return(
    <form id="todo-list" onSubmit={this.onSubmit}>
      {this.state.items.length > 0?
      this.state.items.map((item,i) => {
        return(
            <sapn className="todo-wrap" key={i}>
              <span onClick={()=> this.onClick(item.id)}>
                <input type="checkbox" checked={item.isCompleted} />
                <label className="todo"><i className=""></i>{item.text}</label>
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