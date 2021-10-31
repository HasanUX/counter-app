/* eslint-disable no-unused-vars */

import React from 'react';
import { getFishes } from "../data/fakeFishList";

class Header extends React.Component {

    state = {
        mainTitle: "Machbazaar.com",
        subTitle: "Online fish selling platform.",
        imageUrl: "https:/picsum.photos/90",
        fishes: getFishes() //declared props that was inserted in counters.js
    };

    styles = {
        borderRadius: "50%",
        marginRight: "15px"
    };

     
    
    render(){ 
        
        return (
            //react element starts
            //we can add <React.Fragment> instead of <div></div> if we don't want this blank div
            
            <div className="container">
                <div className="row">
                 
                    {/* <div className="col-md-3 col-12 mt-5">
                        <button type="button" href="#" className="btn btn-warning">
                            <i className="fa fa-shopping-cart"></i>&nbsp;&nbsp; 
                            <span className="badge badge-light"> {this.props.header.value}</span>
                        </button>  
                    </div> */}
                    
                    <div className="col-12 d-flex justify-content-start align-items-center">
                        <h3 className="mr-4">Types</h3>

                        {this.categoryMap()}

                    </div>

                </div>
            </div>
            );

}
    
        //map() - categories
        categoryMap(){
            return <div>{this.props.header.category.map(elem => <button className="btn btn-light border shadow mb-2 mr-4">{elem.name} </button>)} </div>     
        }
    

        btnDanger(){
            return this.state.cartValue===0 ? 'btn btn-lg btn-danger shadow text-white' 
            : 'btn btn-lg btn-success shadow text-white';
        }

        formatCount(){
            const {cartValue} = this.props.counter; //destructuring happens
            const emptySpan = <span className="badge badge-light">Empty</span>;
            return cartValue === 0 ? emptySpan : cartValue;
        }    
    }



    
export default Header;

// between div tag, is a jsx expression which gets compiled to React.createElement()
// between {}, we can add js expression, func that produces,returns value
                   
