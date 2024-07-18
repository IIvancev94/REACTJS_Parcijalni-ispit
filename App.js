import React, { Component } from "react";
import UserDetails from "./components/UserDetails";
import UserForm from "./components/UserForm";
import styles from "./styles/styles.css";

class App extends Component {
  state = {
    username: "",
    user: null,
    repositories: [],
  };

  fetchUserData = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();

      this.setState({
        username: username,
        user: userData,
        repositories: reposData,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  handleFormSubmit = (username) => {
    this.fetchUserData(username);
  };

  handleReset = () => {
    this.setState({
      username: "",
      user: null,
      repositories: [],
    });
  };

  render() {
    const { username, user, repositories } = this.state;

    return (
      <div className='App'>
        <h1>GitHub Korisnik</h1>
        {user ? (
          <div>
            <UserDetails user={user} repositories={repositories} />
            <button onClick={this.handleReset}>Poništi</button>
          </div>
        ) : (
          <UserForm onSubmit={this.handleFormSubmit} />
        )}
      </div>
    );
  }
}

export default App;
