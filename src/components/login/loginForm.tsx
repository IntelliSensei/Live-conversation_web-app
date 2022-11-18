import { FC } from "react";
import { TextField } from "../input";
import "../css/loginForm.css";


export const LoginForm: FC = () => {


  return <div className="login-form">
    <h2>Login</h2>
    <TextField placeholder="username"/>
    <TextField placeholder="password"/>
    <button>log in</button>
    <button>sign up</button>
  </div>
}