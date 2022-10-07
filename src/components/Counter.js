import React from 'react'
//import {useSelector, useDispatch } from 'react-redux'
//import {increment,decrement,increaseby5,toggle } from '../Redux/action'
import classes from './Counter.module.css';
import {connect } from 'react-redux'
import { counterActions } from '../Redux/store'

// const Counter = () => {
//   const dispatch = useDispatch()
//   const counter = useSelector(state=>state.counter)

//   const incrementHandler = ()=>{
//     dispatch(increment())
//   }

//   const decrementHandler = ()=>{
//     dispatch(decrement())
//   }
//   const toggleCounterHandler = () => {}; 

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div> 
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends React.Component{

  incrementHandler(){
   this.props.increment();
  }

  decrementHandler(){
    this.props.decrement();
  }

  increaseby5Handler(){
    this.props.increaseby5();
  }

  toggleCounterHandler(){
   this.props.toggle()
  }
  render(){
      return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { 
     this.props.showCounter &&
     <div className={classes.value}>{this.props.counter}</div>
     }
      <div>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.increaseby5Handler.bind(this)}>Increase by 5</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      </div> 
      <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
    </main>
  );
  }
}

const mapStateToProps =state=>({
  counter:state.counter.counter,
  showCounter:state.counter.showCounter
})

// const mapDispatchToProps = dispatch =>({
//    increment:()=>dispatch(increment()),
//    decrement:()=>dispatch(decrement()),
//    increaseby5:()=>dispatch(increaseby5(5)),
//    toggle:()=>dispatch(toggle())
// })

const mapDispatchToProps = dispatch =>({
   increment:()=>dispatch(counterActions.increment()),
   decrement:()=>dispatch(counterActions.decrement()),
   increaseby5:()=>dispatch(counterActions.increaseby5(5)),
   toggle:()=>dispatch(counterActions.toggle())
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
