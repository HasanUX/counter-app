/* eslint-disable no-unused-vars */
import React from 'react';

class Reviews extends React.Component {
    state = {
       
        reviews: ['Good one', 'Bad one', 'Satisfied', 'Loved it']
        
    };

    styles = {
        borderRadius: "50%",
        marginRight: "15px"
    };

    render(){ 
        return (
          
            <React.Fragment>
                <h4>Reviews{this.state.reviews.length !== 0 && <span> ({this.state.reviews.length})</span>}</h4>
                {/* truthy,falsy applied using && after condition which can be used to conditional render  */}
                {this.state.reviews.length === 0 && <p>There are no reviews.</p>}
                {this.reviewMap()}
            </React.Fragment>
        ); 
    }

  

    //conditional rendering for review list 
    //another conditional rendering is shown where the func is called using truthy,falsy
    //key={} is required to assign unique key value to each list for backend integration
    //another way of map() is showed
    reviewMap(){
        if (this.state.reviews.length === 0) return <p>Please add reviews.</p>;
        return <ul>{this.state.reviews.map(reviewElem => <li key={reviewElem}>{reviewElem}</li>)} </ul>;
    }    
 
}


    
export default Reviews;

// between div tag, is a jsx expression which gets compiled to React.createElement()
// between {}, we can add js expression, func that produces,returns value
                   
