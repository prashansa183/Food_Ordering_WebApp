import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "",
        location: ""
      }
    }

  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/prashansa183")
    const json = await data.json();
    this.setState({
      userinfo: json,
    })
  }
  render() {



    return (
      <>
        <h1> profiles class Component</h1>
        <img src= {this.state.userinfo.avatar_url} />
        <h1>name:{this.state.userinfo.name}</h1>
        <h1>location:{this.state.userinfo.location}</h1>
        {/* <h1>xyz:{this.props.xyz_val}</h1> */}
      </>)
  }

}

export default Profile;


