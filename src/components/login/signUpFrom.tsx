import { FC } from "react";
import { TextField } from "../input";
import "../css/signUpFrom.css"
import { PasswordField } from "../input/PasswordField";

export interface ISignUpFromProps {
  onBackClick: () => void;
}

export const SignUpFrom: FC<ISignUpFromProps> = ({
  onBackClick,
}: ISignUpFromProps) => {
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit();
      }}
      autoComplete="false"

    >
      <div className="sign-up-from">
        <h2>Sign up</h2>
        <TextField placeholder="username" />
        <TextField placeholder="alias" />
        <TextField placeholder="color" />
        <PasswordField placeholder="password" onChange={(nv) => console.log(nv)}/>
        <PasswordField placeholder="confirm" />

        <button type="submit">Sign up</button>
        <button type="button" onClick={() => onBackClick()}>
          Back
        </button>
      </div>
    </form>
  );
};
