import { useContext, useState } from "react";
import axios from "axios";
import "./../assets/css/LoginPage.css";
import { Ctx } from "./../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../utills/auth";

const LoginPage = () => {
  const [auth, setAuth] = useContext(Ctx);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const trackEmail = (e) => {
    setEmail(e.target.value);
  };

  const trackPassword = (e) => {
    setPassword(e.target.value);
  };

  const requestInfo = {
    url: 'https://blogg-61bi.onrender.com/api/v1/users/login',
    // url: "http://localhost:5050/api/v1/users/login",
    method: "POST",
    data: {
      email,
      password,
    },
    headers: {
      "Content-type": "Application/json",
      withCredentials: true,
    }
  };

  // const auth = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios(requestInfo);
    console.log(response)
    const token = response.data.token;
    const name = response.data.name;
    const role = response.data.role;
    setAuth({token,name, role})
    navigate('/Dashboard')
    
  };


  return (
    <div className="login">
      <div className="signin">
        <h1>Login </h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={trackEmail}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={trackPassword}
            required
          />
          <button className="login-btn" type="submit">
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
