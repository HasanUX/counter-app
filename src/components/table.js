/* eslint-disable no-unused-vars */
import React from 'react';
import { getFishes } from "../data/fakeFishList";



class Tables extends React.Component {
    state = {
        fishes: getFishes()
    };

    styles = {
        borderRadius: "50%",
        marginRight: "15px"
    };



    deleteItem = fish => {
        // if(this.fish === undefined) {return} //catcher to handle error
        
        const fishes = this.state.fishes.filter(f => f.fishID !== fish.fishID);
        this.setState({ fishes });

        // if (this.setState({cartCount: this.state.cartCount - 1})) return 0;
        
    };

    render(){ 

        // const {length: count} = this.state.fishes;
   
        return (
            //react element starts
            //we can add <React.Fragment> instead of <div></div> if we don't want this blank div
            
            <div className="container">
                <div className="row">
                   
                    {/* Products list */}
                    <div className="col-md-12 col-12" >
{/*                        
                       <div className="counter-header">
                            <h4 className="text-left">Your cart has {count} item(s)</h4>
                            
                            <div type="button" href="#" className="badge badge-warning p-2 mb-2 float-right">
                                <i className="fa fa-shopping-cart"></i>&nbsp;&nbsp; 
                                <span className="badge badge-light"> {this.state.totalWeight}</span>
                            </div>  
                        </div> */}
                        
                        <table className="table table-striped border" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Weight(kg)</th>
                                    <th>Unit Price</th>
                                    <th>Sub</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.fishes.map(fish => ( 
                                <tr key={fish.fishID}>
                                    <td>{fish.title}</td>
                                    <td>{fish.category.name}</td>
                                    <td>{fish.netWeight}</td>
                                    <td>{fish.price}</td>
                                    <td>{fish.netWeight * fish.price}</td>
                                    {/* <td>{<button onClick={() => this.incrementHandler(fish)} className="btn btn-sm btn-warning">+</button>}</td> */}
                                    <td>{<button onClick={() => this.deleteItem(fish)} className="btn btn-sm btn-danger"> <i className="fa fa-trash"></i></button>}</td>
                                </tr>
                                ))}

                                <tr>
                                    <td></td>
                                    <td>Total weight:</td>
                                    <td>{this.props.tables.totalWeight}</td>
                                    <td>Grand Total:</td>
                                    <td></td>
                                    <td></td>
                                  
                                </tr>
                               
                            </tbody>
                        </table>
                        
                    </div>


                </div>
            </div>
        ); 
    }

    counteWeight(){
        const {netWeight} = this.state; //destructuring happens
        const emptySpan = "0";
        return netWeight === 0 ? emptySpan : netWeight;
    }


     
    //lets get the sub total price
    // getSubTotal(){
    //     let price = this.fish.netWeight * this.fish.price;
    //     const totalPrice =  this.price.reduce((previousValue, currentValue) => {
    //         return previousValue+currentValue; 
    //     }, 0);
    //     return totalPrice;
    // }


    //lets get the grand total

    // export const getGrandTotal = Object.values(fishes).reduce((w, { netWeight }) => w , 0);
    
    //map() - categories
    categoryMap(){
        return <div>{this.state.categories.map(elem => <button className="btn btn-light border shadow mb-2 mr-4"> {elem.name} </button>)}</div>     
    }
    
    //map() - tags
    // tagMap(){
    
    //     const incrementBtn = 
    //     <div className="text-right"> 
    //         <button onClick={() => this.incrementHandler(this.product)} className="btn btn-sm btn-warning mr-2">+</button> 
    //         <button className="btn btn-sm btn-danger"> <i className="fa fa-trash"></i></button> 
    //     </div>;

    //     const tagMapper = this.state.fishes.map(fish => 
    //         <li key={fish} className="card p-3 mb-2"> {fish} {incrementBtn}</li>);
    //         return tagMapper;
    // }

   
}


    
export default Tables;

// between div tag, is a jsx expression which gets compiled to React.createElement()
// between {}, we can add js expression, func that produces,returns value
                   
