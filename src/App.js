import './App.css';
import React, { Component } from 'react';

import NavigationBar from './components/NavBar';
import CounterList from "./components/counterList";

class App extends Component {
  state = {
    counters : [
        { id :1, value: 0},
        { id :2, value: 0},
        { id :3, value: 0},
        { id :4, value: 6},
    ]
}


totalValue() {
  let vari = this.state.counters.map(c => c.value).reduce((a,b)=>a+b);
  // console.log("variable is ",vari);
  return vari
}

deleteCounter = (counterId) =>{
    console.log (counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters : counters})
}


addOnCounter = (counter) => {
    /* Clone whole array */
    const counters = [...this.state.counters];
    /* Finding the relevant index */
    const index = counters.indexOf(counter);
    counters[index] =  {...counter};
    counters[index].value++;
    /* setState , key-value Pair */
    this.setState({counters : counters});
};

subtractOnCounter = (counter) => {
    /* Clone whole array */
    const counters = [...this.state.counters];
    /* Finding the relevant index */
    const index = counters.indexOf(counter);
    counters[index] =  {...counter};
    /* conditioning */
    if (counters[index].value >=1){
        counters[index].value-=1;
    }
    
    /* setState , key-value Pair */
    this.setState({counters : counters});

};

resetCounter = (counter)=> {
    /* Setting each counter value */
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = 0;

    this.setState({counters});
}

resetAllCounter = ()=> {
    const counters = this.state.counters.map (c => {
        c.value=0;
        return c;
    });
    this.setState({counters});
}

render () {
      return (
      <React.Fragment>
      <NavigationBar
        totalCounters={this.state.counters.filter(c => c.value >0).length}
      />
      <main className='container'>
      <CounterList
        counterLst   = {this.state.counters}
        onResetAll = {this.resetAllCounter}
        onAddition = {this.addOnCounter}
        onSubtract = {this.subtractOnCounter}
        onReset    = {this.resetCounter}
        onDelete   = {this.deleteCounter}
        />
     
      </main>
      <span class="badge badge-light">Total Number of Items:</span>
      <span>{this.totalValue()}</span>

    </React.Fragment>
   );
}
}

export default App;
