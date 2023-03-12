import react from 'react';
import "./SignUp1.css";

class SignUp1 extends react.Component{
  state={
    First_Name:'',
    Last_Name: '',
    Phone_No: '',
    Username:'',
    Password:'',

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
      <div className='SignUp1'>
        <div className='login-logo'>
                </div>
         <form onSubmit> = {this.handleSubmit}
         <label>First_Name</label>
          <input type='First_Name' name='First_Name' placeholder='Ex:hafsa' required onChange={this.handleChange}/>
          <label>Last_Name</label>
          <input type='Last_Name' name='Last_Name' placeholder='qadir....' required onChange={this.handleChange}/>
          <label>Phone_No</label>
          <input type='Phone_No' name='Phone_No' placeholder='Ex: 0333***...' required onChange={this.handleChange}/>
          <label>Username</label>
          <input type='Username' name='Username' placeholder='hafsaqadir_' required onChange={this.handleChange}/>
          <label>Password</label>
          <input type='Password' name='Password' placeholder='Db****' required onChange={this.handleChange}/>
         
          <button onSubmit={this.handleSubmit}>Sign Up</button>
          </form>   
      </div>
    )
  }
}
export default SignUp1;