import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      items: [],
      input:'',
      onEditing: false,
    }
  }
}