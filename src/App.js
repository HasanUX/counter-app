/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import { getCategories } from "./data/fakeCategoryList";
import { getFishes, getWeight } from "./data/fakeFishList";

export class App extends Component{
  
  state = {
    headers: [
        {
            id:1, 
            category: getCategories(), 
            value: 9
        }
    ],

    counter: [
        {
          id:1,
          capacity: 5
        },

        {
          id:2,
          capacity: 10
        },

        {
          id:3,
          capacity: 20
        }
    ],

    tables: [
        {
            id: 1, 
            value: 5,
            totalWeight: getWeight,
            count: getFishes()
        }
    ],

    cards: [
        {id: 1, name: "Ilish 2kg"},
        {id: 2, name: "Shutki 5kg"}
    ]
};

constructor(){
  super();
  
}

//life-cycle hooks can be used in only class comp
//this is the right method to make ajax call to get data
componentDidMount(){
  
}



// increment/increase qty method 
incrementHandler = c => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(c);
    counter[index] = { ...c };
    counter[index].capacity++;
    this.setState({ counter });
};

// delete/increment item method 
deleteHandler = (cardID) => {
    // if(this.fish === undefined) {return} //catcher to handle error
    const cards = this.state.cards.filter(c => c.id !== cardID);
    this.setState({ cards });
    // if (this.setState({cartCount: this.state.cartCount - 1})) return 0;
};

// undo/reset method 
resetHandler = () => {
    const counter = this.state.counter.map(c => {
        c.capacity = 0;
        return c;
    });
   
    this.setState({ counter });
}

//get counter length
getCounterLength = () => {
  const {length: count} = this.state.counter;
  return count;
}

  render(){
 
    return (//here Counter comp will need to render  
      
      <React.Fragment>
        <Navbar count={this.getCounterLength()}/>
        
        <main className="container">
          <Counters 
            headers={this.state.headers}
            counter={this.state.counter}
            tables={this.state.tables}
            cards={this.state.cards}
            onIncrement={this.incrementHandler}
            onDelete={this.deleteHandler}
            onReset={this.resetHandler} />
        </main>
        
      </React.Fragment>
    );
  }
}

export default App;