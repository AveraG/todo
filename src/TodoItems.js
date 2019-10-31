import React, { Component } from 'react';


class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createItem = this.createItem.bind(this);
        this.state = {
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);

    }

    edit(e) {
        this.props.edit(e);
    }

    delete(key) {
        this.props.delete(key);
    }

    handleClick() {
        this.setState({
            clicked: true
        })
    }

    createItem(item) {
        
        return (

            <div onClick={this.handleClick} className='li'
                key={item.key}  >

                {this.state.clicked ? (
                    <form onSubmit={this.edit}>
                        <label>
                            Item:
                <input ref={(a) => this._inputElement = a} className='input' />
                        </label>
                        <button type='submit' >ADD</button>
                    </form>
                ) : (
                        <div>

                            <input type='checkbox' />


                            {item.text}

                            <button className='bp'>
                                <img className='trash' src={require('./assets/trashcan.jpg')} alt='trashcan'
                                    onClick={() => this.delete(item.key)} /></button>
                        </div>
                    )

                }
            </div>
            )
    };


    render() {

        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createItem);

        return (
            <ul className='theList'>
                {listItems}
            </ul>
        )

    }
};

export default TodoItems;