import React from 'react';

//stateless functional components
//destructuring arguments in stateless func comp

const Counter = ({counter, onIncrement })  => {

    return (
        <div className="budget-select mb-2">                 
            <button className="btn btn-sm btn-primary ml-2" 
                onClick={() => onIncrement(counter)}>
                <i className="fa fa-plus"></i> Set capacity
            </button> 

            <span className="badge badge-dark ml-2"> {counter.capacity} </span> 
        </div>
    );
}
 
export default Counter;
 
