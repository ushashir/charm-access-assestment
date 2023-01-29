import React, {setState} from 'react';

const Signup = () => {
    const [fullName, setFullName] = setState('')
    const [email, setEmail] = setState("");
    const [address, setAddress] = setState("");
    const [gender, setGender] = setState("");
     const [password, setPassword] = setState("");
     const [confirmPassword, setCPassword] = setState("");

    return (
      <div>
        <h1>Signup page</h1>
        <form>
          <label>Full Name</label>
          <input
            type={fullName}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
          <label>Password</label>
          <input
            type={password}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <label>Email</label>
          <input
            type={email}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
          <label>Password</label>
          <input
            type={password}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <label>Email</label>
          <input
            type={email}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
          <label>Password</label>
          <input
            type={password}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
};

export default Signup;