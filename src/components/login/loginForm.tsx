import { FC, useEffect, useState } from "react";
import { TextField } from "../input";
import "../css/loginForm.css";
import { PasswordField } from "../input/PasswordField";
import { useLoginService } from "../../hooks";

interface ILoginFormProps {
  onSignUpClick: () => void;
}

export interface LoginOutput {
  loginUser: LoginUser;
}

export interface LoginUser {
  message: string;
  token: string;
  __typename: string;
  email: string;
  password: string;
}

export const LoginForm: FC<ILoginFormProps> = ({
  onSignUpClick,
}: ILoginFormProps) => {

  const { payload, login, logout, isAuthorized, error } = useLoginService()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");


  // if email or password is invalid - send error to user 
  useEffect(() => {
    if (error) {
      setErrMessage(error.message)
    } else {
      setErrMessage("")
    }
  }, [error])

  if (isAuthorized) {
    return <div>
      <div className="loggedin-user-info">
        <p>User Infomation</p>
        <p>Email: {payload?.email}</p>
        <p>Alias: {payload?.alias}</p>
        <p>Color: {payload?.color}</p>
      </div>
      <button type="button" onClick={() => logout()}>
        Logout
      </button>
    </div>
  }

  return (
    <form
      onSubmit={async (ev) => {
        ev.preventDefault();
        await login(email, password)
      }}
      autoComplete="off"
    >
      <div className="login-form" >
        <h2>Login</h2>
        <TextField placeholder="email" onChange={(nv) => setEmail(nv)} />
        <PasswordField placeholder="password" onChange={(nv) => setPassword(nv)} />

        <p hidden={errMessage.length <= 0} style={{ color: "red" }}>{errMessage}</p>
        <button type="submit">Log in</button>
        <button type="button" onClick={() => onSignUpClick()}>
          Sign up
        </button>
      </div>
    </form>
  );
};
