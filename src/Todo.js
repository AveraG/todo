import React, { Component } from 'react';
import TodoItems from "./TodoItems";
// import EditItems from "./editItem";
import './App.css';


class Todo extends Component {
  constructor(props) {
    super(props);

  
    this.state = {
      items: [],
      completed: false,
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = '';
    }


    e.preventDefault(); //keeps the page from refreshing when you hit submit
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    });
  }

  addEditedItem(e) {
    e.preventDefault();
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = '';
    }
  }
    

  render() {

    return ( //react fragment allows us to box everything to the dom, wihtout showing up in the dom (no extra divs)
      <React.Fragment>

        <div className='hero'>
          <img className='heroImage' src='/static/media/fruits-image.1481df35.jpg' alt='grocery'></img>
        </div>
        <header className="App-header"><p className='bold'>
          Shopping List
          </p>
          <form onSubmit={this.addItem}>
            <label>
              Item:
          <input ref={(a) => this._inputElement = a} className='input' />
            </label>
            <button type='submit' >ADD</button>
          </form>
        </header>
        <div className='center'>
          <TodoItems entries={this.state.items}
            delete={this.deleteItem}
            edit={this.addItem}
           />
        </div>


      </React.Fragment >
    );
  }
}

export default Todo;
