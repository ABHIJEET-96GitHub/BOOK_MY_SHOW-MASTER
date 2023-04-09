import React, { useState } from 'react'

export default function Login({handleChange}) {
    
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [valid, setvalid] = useState(true);
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    //Generate JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    function username1(e) {
        setusername(e.target.value);
      }
      function password1(e) {
        setpassword(e.target.value);
      }

    // function submit(e) {
    //     setvalid(username === "admin" && password === "pass1234");
    //     if (!valid) {
    //         document.alert("Invalid Username or Password");
    //     }
    //     else {
    //         document.alert("User Logged In");
    //     };
    //   }

    const renderForm = (
      <div className="form">
        <form>
          <div className="input-container">
            <label>Username</label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );

    <form onSubmit={handleSubmit}></form>

    // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];
  
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
  
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  <div className="login-form">
  <div className="title">Sign In</div>
  {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
  </div>

// return (
//     <div>
//       <form>
//         <label htmlFor='user-name'>User Name</label>
//         <input id="user-name" onChange={username1}></input>
//         <label htmlFor="plogin-password">Password</label>
//         <input id="plogin-password" onChange={password1}></input>
//         <span>
//             <button onClick={submit}>Login</button>
//         </span>
//         <span>
//             <button onClick={handleChange}>Cancel</button>
//         </span>
//       </form>
//     </div>
//   )

return (
  <div className="app">
    <div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  </div>
);
}
