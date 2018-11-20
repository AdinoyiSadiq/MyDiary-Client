import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../actions/authActions';
import validateAuth from '../lib/validation';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  touched: {
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
};

const fieldNames = ['firstname', 'lastname', 'email', 'password', 'confirmPassword'];

class SignupForm extends Component {
	state = initialState;

	handleSubmit = async (event) => {
    event.preventDefault();
		const { signup: signupUser, history } = this.props;
		const {
      firstname, lastname, email, password, confirmPassword,
		} = this.state;
		
		const fields = {
      firstname, lastname, email, password, confirmPassword,
    };
		
		const validationError = validateAuth(fields, fieldNames);
    const changedTouchState = this.changeTouchState(fieldNames, true);
    this.setState({ touched: changedTouchState });

		const body = {
      firstName: firstname.trim(),
      lastName: lastname.trim(),
      email: email.trim(),
      password: password.trim(),
		};
		
		if (!validationError.status) {
      signupUser(body, () => history.push('/main/entries'));
      this.setState(initialState);
    }
  }

	handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
	}
	
	handleBlur = (field) => () => {
    const { touched } = this.state;
    this.setState({
      touched: { ...touched, [field]: true },
    });
	}
	
	changeTouchState = (fields, state) => {
    const touchState = {};
    fields.forEach((field) => {
      touchState[field] = state;
    });
    return touchState;
  }

	render() {
		const {
      firstname, lastname, email, password, confirmPassword, touched, 
		} = this.state;
		const validationError = validateAuth({
      firstname, lastname, email, password, confirmPassword,
    }, fieldNames);

		return (
			<div>
				<div className="authContent signup">
					<main>
						<div className="authLogo">MyDiary</div>
						<div className="title">Create your MyDiary account</div>
						<hr/>
						<form className="signupForm" onSubmit={this.handleSubmit}>
							<AuthInput
								value={firstname}
								touched={touched}
								error={validationError}
								handleChange={this.handleChange}
								handleBlur={this.handleBlur('firstname')} 
								name="firstname" 
								placeholder="First name" 
							/>
							<AuthInput
								value={lastname}
								touched={touched}
								error={validationError}
								handleChange={this.handleChange} 
								handleBlur={this.handleBlur('lastname')} 
								name="lastname" 
								placeholder="Last name" 
							/>
							<AuthInput
								value={email}
								touched={touched}
								error={validationError}
								handleChange={this.handleChange} 
								handleBlur={this.handleBlur('email')} 
								name="email" 
								placeholder="Email" 
							/>
							<AuthInput
								value={password}
								touched={touched}
								error={validationError}
								handleChange={this.handleChange} 
								handleBlur={this.handleBlur('password')} 
								name="password"
								type="password" 
								placeholder="Password" 
							/>
							<AuthInput
								value={confirmPassword}
								touched={touched}
								error={validationError}
								handleChange={this.handleChange} 
								handleBlur={this.handleBlur('confirmPassword')} 
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
	}
};

export default connect(null, { signup })(SignupForm);