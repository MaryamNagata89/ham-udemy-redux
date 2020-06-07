
import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
const profiles = [
{name:"maryam",age:36},
{name:"Ramazan",age:54},
{name:"kaori",age:60}
]
return(
<div>
{profiles.map((profile,index)=>{
return <User name = {profile.name} age={profile.age} key={index}/>
})
}
</div>
)
}
const User = (props)=>{
return <div>Hi,I'm {props.name},my age is {props.age}</div>;

}

User.propTypes = {
name: PropTypes.string,
age: PropTypes.number.isRequired

}

export default App;

