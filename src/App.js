
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <label htmlFor="bar">bar</label>
        <input
          type="text"
          onClick={() => {
            console.log('im clicked');
          }}
        />
        <User name="Maryam" age={36} />
      </>
    );
  }
}
class User extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.age = props.age;
  }
  render() {
    return (
      <div>
        <p>
          Im {this.name} and my age is {this.age}
        </p>
      </div>
    );
  }
}

export default App;

