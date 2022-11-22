import { FC } from "react";
import { TextField } from "../input";
import "../css/signUpFrom.css"
import { PasswordField } from "../input/PasswordField";

export interface ISignUpFormProps {
  onBackClick: () => void;
  email?: string;
  alias?: string;
  color?: string;
  password?: string;
  confirmPassword?: boolean;
}



export const SignUpFrom: FC<ISignUpFormProps> = ({
  onBackClick,
}: ISignUpFormProps) => {
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
        <TextField placeholder="email" />
        <TextField placeholder="alias" />
        <TextField placeholder="color" />
        <PasswordField placeholder="password" onChange={(nv) => console.log(nv)}/>
        <PasswordField placeholder="confirm password" />

        <button type="submit">Sign up</button>
        <button type="button" onClick={() => onBackClick()}>
          Back
        </button>
      </div>
    </form>
  );
};
