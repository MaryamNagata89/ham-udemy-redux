import React,{ Component } from 'react';

const App = () => (<Counter></Counter>)
class Counter extends Component {
constructor(props){
super(props)
this.state ={count: 0}
}

handleButton = ()=>{
this.setState({count: this.state.count +1 }) 
}
handleButtonno =()=>{
this.setState({count: this.state.count - 1})
}

render(){
return(
<>
<div>count: {this.state.count}</div>
<button onClick={this.handleButton}>+1</button>
<button onClick={this.handleButtonno}>-1</button>
</>
)
}
}




export default App;

