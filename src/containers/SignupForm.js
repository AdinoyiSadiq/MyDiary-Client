import React from 'react';
import { Link } from 'react-router-dom';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';

const SignupForm = () => (
  <div>
    <div className="authContent signup">
      <main>
        <div className="authLogo">MyDiary</div>
			  <div className="title">Create your MyDiary account</div>
        <hr/>
        <form className="signupForm">
					<AuthInput 
						name="firstname" 
						placeholder="First name" 
					/>
					<AuthInput 
						name="lastname" 
						placeholder="Last name" 
					/>
					<AuthInput 
						name="email" 
						placeholder="Email" 
					/>
					<AuthInput 
						name="password"
						type="password" 
						placeholder="Password" 
					/>
					<AuthInput 
						name="confirmPassword" 
						type="password"
          	placeholder="Confirm Password"
					/>
					<Button title="Sign Up" type="submit" />
			  </form>
      </main>
    </div>
    <div className="authAlt">
		  Already have an account?
		  <Link to="/auth/signin">Sign In</Link>
	  </div>
  </div>
);

export default SignupForm;