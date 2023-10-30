import './App.css';
import React from 'react'
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class App extends React.Component{
constructor(props) {
  super(props)

  this.state = {
    item: [],
    currentItem:{
      text: '',
      key: ''
    }
  }
  this.handleInput = this.handleInput.bind(this);
  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
  this.setUpdate = this.setUpdate.bind(this);
}

handleInput(e) {
  this.setState({
    currentItem: {
      text: e.target.value,
      key:Date.now()
    }
  })
}

addItem(e) {
  e.preventDefault();
  const newItem = this.state.currentItem;
  console.log(newItem);
  if(newItem.text !== ""){
    const newItems = [...this.state.item, newItem];
    this.setState({
      item: newItems,
      currentItem: {
        text: '',
        key: ''
      }
    })
  }
}
deleteItem(key) {
  const filterItems = this.state.item.filter(item => item.key !== key);
  this.setState({
    item: filterItems,
  })
}
setUpdate(text, key) {
  const items = this.state.item;
  items.map(item => {
    if (item.key === key) {
      item.text = text;
    }
  })
  this.setState({
    item:items,
  })
}
  render() {
    return(
      <div className='App'>
      <header>
        <form id='to-do-form' onSubmit={this.addItem}>
          <input type="text" placeholder='Enter Text'
          value={this.state.currentItem.text}
          onChange={this.handleInput}
          />
          <button type='submit'>Add</button>
        </form>
      </header>
      <ListItems items = {this.state.item}
         deleteItem={this.deleteItem}
         setUpdate={this.setUpdate}
      >
      </ListItems>
      </div>
    )
  }
}
 export default App;
