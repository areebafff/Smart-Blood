import react from 'react';
import "./SignIn2.css";
class SignIn2 extends react.Component{
  state={
    email: '',
    pwd: ''
  }
  handleChange = (e) =>{
      const {name,value} = e.target
      this.setState({[name]:value})

  }
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.isLogin(true)

  }
  render()
  {
    return(
      <div className='SignIn2'>
        <div className='login-logo'>
                </div>
         <form onSubmit> = {this.handleSubmit}
         <label>Email</label>
          <input type='email' name='email' placeholder='email....' required onChange={this.handleChange}/>
          <label>Password</label>
          <input type='password' name='pwd' placeholder='password....' required onChange={this.handleChange}/>
          <button onSubmit={this.handleSubmit}>Log In</button>
          </form>   
      </div>
    )
  }
}
export default SignIn2;