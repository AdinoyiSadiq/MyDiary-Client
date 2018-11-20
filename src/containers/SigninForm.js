import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin, clearSigninError } from '../actions/authActions';
import validateAuth from '../lib/validation';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';

const initialState = {
  email: '',
  password: '',
  touched: {
    email: false,
    password: false,
  },
};

const fieldNames = ['email', 'password'];

class SigninForm extends Component {
	state = initialState;

	componentDidMount = () => {
    const { clearSigninError: clearError } = this.props;
    clearError();
  }

	handleSubmit = async (event) => {
    event.preventDefault();
		const { signin: signinUser, history } = this.props;
		const { email, password } = this.state;

		const validationError = validateAuth({ email, password }, fieldNames);
		const changedTouchState = this.changeTouchState(fieldNames, true);
		this.setState({ touched: changedTouchState });

		if (!validationError.status) {
      signinUser({ email, password }, () => history.push('/main/entries'));
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
		const { email, password, touched } = this.state;
		const { errorMessage } = this.props;
		const validationError = validateAuth({ email, password }, fieldNames);

		return (
			<div>
				<div className="authContent signin">
					<main>
						<div className="authLogo">MyDiary</div>
						<div className="title">Welcome back!</div>
						<hr/>
						<form className="signinForm" onSubmit={this.handleSubmit}>
							<div className="authError">{errorMessage}</div>
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
	}
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default connect(mapStateToProps, { signin, clearSigninError })(SigninForm);