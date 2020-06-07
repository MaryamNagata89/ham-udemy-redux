import React,{ Component } from 'react';


class App extends Component {
  render(){
	return (
<> 
<label htmlFor="bar">bar</label>
<input type ="text"onClick={()=>{console.log('im clicked')}}/>
      
</>
);
}

}
export default App;
