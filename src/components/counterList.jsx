import React, { Component } from 'react';
import Counter from './counterComp';

class Counters extends Component {
    render() { 
        return (
        <React.Fragment>
            <button onClick={this.props.onResetAll}
            className='btn btn-secondary btn-sm'>Reset All
            </button>


            {this.props.counterLst.map(counterElement => (
            <Counter 
            key ={counterElement.id} 
            //Counter = {counterElement}
            counter = {counterElement}
            //value={counterElement.value} 
            //id={counterElement.id}
            delete = {this.props.onDelete} 
            add = {this.props.onAddition}
            subtract = {this.props.onSubtract}
            reset = {this.props.onReset}
            />
            ))}
            
        </React.Fragment>);
    };

    
}
 
export default Counters
;