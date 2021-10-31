/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './cards';
import Counter from './counter';
import Header from './header';
import Reviews from './reviews';
import Tables from './table';

class Counters extends React.Component {
    
    //with this method, we can decide whether or not we should make a ajax call.
    //if (prevProps.counter.value !== this.props.counter.value){
    //Ajax call and get new data from the server}
    componentDidUpdate(prevProps, prevState){
        
    }

    //with this method, we can clean dom whenever a listener work is done
    //otherwise there will be memoryleaks
    componentWillUnmount(){

    }

    render() {

        // simplifying references using obj destructuring
        const {headers, counter, cards, tables, onIncrement, onDelete, onReset} = this.props;

        return (
            
        <div className="container mt-4"> 

                <div className="header-type-div mb-4">
                    {headers.map(header => 
                    <Header key={header.id} 
                    header={header} //will receive all state values
                    category = {this.getCategories}/>)}                
                </div>  

                <div className="d-flex justify-content-start">
                   
                        <div className="counters-div mr-5">
                            {counter.map(counter => 
                            <Counter key={counter.id}
                            counter={counter}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                            onReset={this.props.onReset}
                            /> )}
                         
                        
                            <div className="reset-div">
                                <button className="btn btn-sm btn-dark" 
                                    onClick= {this.props.onReset}> 
                                    <i className="fa fa-undo"></i> Reset capacity
                                </button>
                            </div>
                        </div>      

                        <div className="card-div">
                           
                            {this.props.cards.map(card => 
                            <Card key={card.id} 
                            card={card}
                            onDelete={this.props.onDelete}/>) //prop inserted, declated in cards.js
                            }
                        </div>

                        <div className="table-div">
                            {this.props.tables.map(table => 
                            <Tables key={table.id} 
                            tables={table}
                            onDelete={this.props.onDelete}/>)}
                        </div> 
                </div>                

                <div className="review-div">
                    <Reviews />
                </div>

                

        </div>     
        );
    }
}
 
export default Counters;