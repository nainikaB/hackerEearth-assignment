import React from "react";
import axios from "axios";

class Profile extends React.Component {
  state = {
    profileData: {},
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/supreetsingh247")
      .then((response) => {
        console.log(response.data);
        this.setState({
          profileData: response.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
  render() {
    return (
      <div>
        <img src={this.state.profileData.avatar_url} alt="avatar" />
        <h1> {this.state.profileData.name}</h1>
        <h2>{this.state.profileData.login}</h2>
        <h3>{this.state.profileData.bio}</h3>
        <button>Follow</button>
        <p> {this.state.profileData.followers} followers </p>
        <p>{this.state.profileData.following} following</p>
        <p>{this.state.profileData.company}</p>
        <p>{this.state.profileData.location}</p>
        <p>{this.state.profileData.email}</p>
      </div>
    );
  }
}

export default Profile;
