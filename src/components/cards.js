/* eslint-disable no-unused-vars */
import React from 'react';

//controlled comp: doesn't have own local state, it receives data via props and raises
//events when data needs to be changed.
export class Card extends React.Component {
    // state = {
    //     cartValue: this.props.card.value, //declared props that was inserted in counters.js
    //     itemName: this.props.card.name
    // };

    styles = {
       width: "18rem"
    };

    //eventHandler for the increment btn
    //binding a func using arrow func so that we don't need to create constructor
    //setState is a built-in method to notify react that state prop value is gonna be changed
    //react will then schedule a async call to the render(), i,e this is going to be happened in the future
//     incrementHandler = () => {
//         this.setState({ cartValue: this.state.cartValue + 1 });
//    };

    render(){ 

        return (

            //react element starts
            //we can add <React.Fragment> instead of <div></div> if we don't want this blank div
            
            <React.Fragment>
                
                <div className="card mb-2" style={this.styles} >
                    
                    <div className="card-body">
                        <h5 className="card-title mb-4">{this.props.card.name}</h5>
                        
                        <div className="d-flex">
                            <button  className="btn btn-sm btn-primary mr-2">
                            <i className="fa fa-table mr-2"></i> Add to table
                            </button>

                            <button onClick = {() => this.props.onDelete(this.props.card.id)}  className="btn btn-sm btn-danger">
                            <i className="fa fa-backward"></i> Pass it
                            </button>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ); 
    }

  
  

    formatCount(){
        const {cartValue} = this.state; //destructuring happens
        const emptySpan = <span className="badge badge-light">Empty</span>;
        return cartValue === 0 ? emptySpan : cartValue;
    }    
    

}

    
export default Card;

