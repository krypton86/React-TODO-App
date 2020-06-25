import React from 'react';
import './App.css';
import ListItems from './components/ListItems'

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items:[],
            currentItem:{
                text:"",
                key:""
            }
        }
    }

    handleInput = (event) =>{
        this.setState({
            currentItem:{
                text:event.target.value,
                key: Date.now()
            }
        });

    }

    addItem = (event) => {
        event.preventDefault();
        let oNewItem = this.state.currentItem;
        if(oNewItem.text !== ""){
            let aNewItems = [...this.state.items, oNewItem];
            this.setState({
                items: aNewItems,
                currentItem:{
                    text:"",
                    key:""
                }
            })
        }else{
            alert("It can not be empty")
        }
    }

    deleteItem = (key) =>{
        let aFilteredItems = this.state.items.filter(item => {
            return item.key !== key;
        })

        this.setState({
            items:aFilteredItems
        })
    }

    updateItem = (text,key) =>{
        let aItems = this.state.items;
        let oItemToUpdate = aItems.find(oItem =>{
            return key === oItem.key;
        })
        oItemToUpdate.text = text;

        this.setState({
            items: aItems
        })
    }

  render() {
    return (
        <div className="App">
          <header>
            <form id="to-do-form" onSubmit={this.addItem}>
              <input type="text" placeholder="Enter the text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}/>
              <button type="submit">Add</button>
            </form>
          </header>
            <ListItems items={this.state.items} deleteItem ={this.deleteItem} updateItem={this.updateItem} />
        </div>
    )
  }
}

export default App;
