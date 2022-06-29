import React from 'react'
import './Registration.css'
const Register = () => {
  return (
    <div>
    <div class="form-holder">
	<h2>Regustration Form</h2>
  <div class="form-controler">
		<input type="text" class="form-input" placeholder="Name"/>
		<span class="form-label-holder">
			<label>
     <span>Name</span>
			</label>
		</span>
	</div>
  <div class="form-controler">
		<input type="integer" class="form-input" placeholder="Contact"/>
		<span class="form-label-holder">
			<label>
     <span>Contact</span>
			</label>
		</span>
	</div>
  <div class="form-controler">
		<input type="email" class="form-input" placeholder="email"/>
		<span class="form-label-holder">
			<label>
     <span>Email</span>
			</label>
		</span>
	</div>
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
		<input type="submit" class="form-button" value="Register"/>
	</div>
</div> 
 
</div>       
  )
}

export default Register;