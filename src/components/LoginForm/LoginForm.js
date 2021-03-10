import React from 'react';
import styles from './LoginForm.module.less';
import axios from "axios";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', passowrd: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleClick(event){
    var apiBaseUrl = "http://localhost:8888/api/user/";
    var self = this;
    var payload={
    "email":this.state.email,
    "password":this.state.passowrd
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
      if(response.status == 200){
      console.log("Login successfull");
      window.location.href = 'http://localhost:8890/browse';
      }
      else if(response.status == 204){
      console.log("Username password do not match");
      alert("username password do not match")
      }
      else{
      console.log("Username does not exists");
      alert("Username does not exist");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input name="email" type="text" onChange={e => this.setState({email: e.target.value})}/>
        </label>
        <label>
          Passowrd:
          <input name="passowrd" type="text" onChange={e => this.setState({passowrd: e.target.value})} />
        </label>
        <button label="Submit"  onClick={(e) => this.handleClick(e)}/>
      </form>
    );
  }

}
export default LoginForm;
