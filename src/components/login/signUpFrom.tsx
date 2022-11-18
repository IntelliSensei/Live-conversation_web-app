import { FC } from "react";
import { TextField } from "../input";
import "../css/signUpFrom.css"

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
    >
      <div className="sign-up-from">
        <h2>Sign up</h2>
        <TextField placeholder="username" />
        <TextField placeholder="alias" />
        <TextField placeholder="color" />
        <TextField placeholder="password" />
        <TextField placeholder="confirm" />

        <button type="submit">Sign up</button>
        <button type="button" onClick={() => onBackClick()}>
          Back
        </button>
      </div>
    </form>
  );
};
