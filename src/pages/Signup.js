import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    email: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;

    this.props.signup({ username, password, email })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
            email: ""
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, email } = this.state;
    return (
      <div className="flex-column backfground">
        <h1>Sign Up</h1>
        <form className="flex-column" onSubmit={this.handleFormSubmit}>
          <div className="flex-column space-around user-box-signup">
              <div  className="flex-start">
                <label>Username:</label>
                <input className="user-box-input" type="text" name="username" value={username} onChange={this.handleChange}/>
              </div>
              <div  className="flex-start">  
                <label>Email:</label>
                <input className="user-box-input" type="email" name="email" value={email} onChange={this.handleChange}/>
              </div>
              <div  className="flex-start">  
                <label>Password:</label>
                <input className="user-box-input" type="password" name="password" value={password} onChange={this.handleChange} />
              </div>  
                <input className="button-log" type="submit" value="Signup" />
            </div>
        </form>
        <p className="p-link" >Already have account? 
          <Link className="link" to={"/login"}> Login</Link>
        </p>
      </div>
    )
  }
}

export default withAuth(Signup);