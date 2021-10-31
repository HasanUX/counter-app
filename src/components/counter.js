import React from 'react';

//stateless functional components
//destructuring arguments in stateless func comp

const Counter = ({counter, onIncrement, onDecrement })  => {

    return (
        <div className="budget-select mb-2">                 
            <button className="btn btn-sm btn-primary mr-2" 
                onClick={() => onIncrement(counter)}>
                <i className="fa fa-plus"></i>
            </button> 

            <button className="btn btn-sm btn-warning" 
                onClick={() => onDecrement(counter)}>
                <i className="fa fa-minus"></i>
            </button> 

            <span className="badge badge-dark ml-2"> {counter.capacity} </span> 
        </div>
    );
}
 
export default Counter;
 
