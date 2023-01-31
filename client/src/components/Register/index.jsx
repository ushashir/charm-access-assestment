import React, { useState } from 'react';
import "./register.css"

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="form-container">

      <div className='form-left'>
        <div className="form-heading form-input">
          <h1>Sign up</h1>
        </div>
        <p>We will never share your details</p>
        <form>
          <div>
            <div>
              <label>First name</label>
            </div>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            ></input>
          </div>
          <div>
            <div>
              <label>Last name</label>
            </div>
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            ></input>
          </div>
          <div>
            <div>
              <label>Email</label>
            </div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            ></input>
          </div>
          <div>
            <div>
              <label>Phone number</label>
            </div>
            <input
              type="number"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            ></input>
          </div>
          <div>
            <div>
              <label>Create password</label>
            </div>
            <input
              type="password"
              placeholder="************"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            ></input>
            <p>
              Minimum of 8 characters, at least one uppercase letter, and at
              least one special character
            </p>
          </div>
          <div>
            <div>
              <label>Confirm password</label>
            </div>
            <input
              type="password"
              placeholder="************"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            ></input>
            <p>
              Minimum of 8 characters, at least one uppercase letter, and at
              least one special character.
            </p>
          </div>
          <div>
            <input></input>
            <p>You agree to our friendly privacy policy.</p>
          </div>
          <div>
            <div>
            </div>
            <input
              type="submit"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            ></input>
            <p>
              Minimum of 8 characters, at least one uppercase letter, and at
              least one special character.
            </p>
          </div>

          
          <button>Submit</button>
        </form>
      </div>

      <div className='form-right'>
          <div className="blue-container">
            
          </div>
      </div>

        
        
        
      </div>
    );
};

export default Register;