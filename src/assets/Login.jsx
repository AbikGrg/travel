import React from 'react'

import  './Login.css';
const Login = () => {
  return (
 

<div class="form-holder">
	<h2>Login Form</h2>
	<div class="form-controler">
		<input type="text" class="form-input" placeholder="username"/>
		<span class="form-label-holder">
			<label>
				<span>User name</span>
			</label>
		</span>
	</div>
	<div class="form-controler">
		<input type="password" class="form-input" placeholder="Password"/>
		<span class="form-label-holder">
			<label>
				<span>Password</span>
			</label>
		</span>
	</div>
	<div class="form-controler">
		<input type="submit" class="form-button" value="login"/>
	</div>
</div>
  )
  }
export default Login