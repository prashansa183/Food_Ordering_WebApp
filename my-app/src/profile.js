import React from "react";
const Profile =
  (props) => {
    return (
      <div>
        <h1>
          this is profile section (functional Component)
        </h1>
        <h1> name:{props.name}</h1>
      </div>
    )
  }
export default Profile;