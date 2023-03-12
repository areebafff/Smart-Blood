import react from 'react';
import "./SignIn1.css";
//import DMenu from '../../dashboard/donor/DMenu';
import '../../dashboard/donor/DMenu'
import { useNavigate } from "react-router-dom";
class SignIn1 extends react.Component{
  state={
    email: '',
    pwd: ''
  }
  handleChange = (e) =>{
      const {name,value} = e.target
      this.setState({[name]:value});
      const navigate = useNavigate();
      navigate('/Reg1/*');

  }
  handleSubmit = (e) =>{
    e.preventDefault();
   //<div>{(<Navigate to ='../../dashboard/donor/DMenu' replace={true}/>)}</div>
   
  
  //  navigate('/Reg1/*');
 
    this.props.isLogin(true)
 // const navigate = useNavigate();

  }
  render()
  {
    
    return(
      <div className='SignIn1'>
        <div className='login-logo'> </div>
         <form onClick={ <div> <navigate to='/Reg1' replace={true} /></div>}>
         <label>Email</label>
          <input type='email' name='email' placeholder='email....' required onChange={this.handleChange.e}/>
          <label>Password</label>
          <input type='password' name='pwd' placeholder='password....' required onChange={this.handleChange.e}/>
          <button type='submit' onClick={this.handleSubmit}>Log In</button>
          </form>   
      </div>
    )
  }
}
export default SignIn1;
//<div> <navigate to='/Reg1' replace={true} /></div>