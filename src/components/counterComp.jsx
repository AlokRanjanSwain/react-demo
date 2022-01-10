import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return ( 
        <div>
            <span className = {this.badgeClassDisp()}> {this.props.counter.value}</span>
            <button onClick={() => this.props.add(this.props.counter)} className='btn btn-secondary btn-sm m-2'>+</button>
            <button onClick={() => this.props.subtract(this.props.counter)} className='btn btn-secondary btn-sm m-2'>-</button>
            <button onClick={() => this.props.delete (this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            <button onClick={()=> this.props.reset (this.props.counter)} className='btn btn-info btn-sm'>Reset</button> 
        </div>
        );
    }; 

    badgeClassDisp() {
        let classes = "badge badge-pill m-auto badge-"
        classes+= this.props.counter.value === 0 ? "warning":"primary"
        return classes;
    };

}
 
export default Counter;