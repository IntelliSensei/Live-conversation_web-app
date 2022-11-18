import { FC } from "react";
import { TextField } from "../input";
import "../css/loginForm.css";

interface ILoginFormProps {
  onSignUpClick: () => void;
}

export const LoginForm: FC<ILoginFormProps> = ({
  onSignUpClick,
}: ILoginFormProps) => {
  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit();
      }}
    >
      <div className="login-form">
        <h2>Login</h2>
        <TextField placeholder="username" />
        <TextField placeholder="password" />
        <button type="submit">Log in</button>
        <button type="button" onClick={() => onSignUpClick()}>
          Sign up
        </button>
      </div>
    </form>
  );
};
