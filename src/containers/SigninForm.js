import React from 'react';
import { Link } from 'react-router-dom';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';

const SigninForm = () => (
  <div>
    <div className="authContent signin">
      <main>
        <div className="authLogo">MyDiary</div>
			  <div className="title">Welcome back!</div>
        <hr/>
        <form className="signinForm">
					<AuthInput 
						name="email" 
						placeholder="Email" 
					/>
					<AuthInput 
						name="password"
						type="password" 
						placeholder="Password" 
					/>
					<Button title="Sign In" type="submit" />
			  </form>
      </main>
    </div>
    <div className="authAlt">
      Don't have an account?
		  <Link to="/auth/signup">Sign Up</Link>
	  </div>
  </div>
);

export default SigninForm;