import React from 'react'
import Profile from './profileClass'
import Profile1 from './profile'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <h1>
        <Profile xyz_val={"hello"}/>

      </h1>
      <Profile1 name={"prash"}/>
    </div>
  ) 
}
class About_class extends React.Component{
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
      
  }
render(){
  return (
    <div>
      <h1>About Us Page</h1>
      <h1>
        <Profile xyz_val={"hello"}/>

      </h1>
      <Profile1 name={"prash"}/>
    </div>
  ) 
}
}
export default About