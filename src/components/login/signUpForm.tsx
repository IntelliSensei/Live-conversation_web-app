import { FC, useState } from "react";
import { ColorPicker, TextField } from "../input";
import "../css/signUpForm.css"
import { PasswordField } from "../input/PasswordField";
import { gql, useMutation } from "@apollo/client";

export interface ISignUpFormProps {
  onBackClick: () => void;
}

export interface RegisterOutput {
  registerUser: RegisterInput;
}

export interface RegisterInput {
  alias: string;
  email: string;
  password: string;
  color: string;
}

export const SignUpForm: FC<ISignUpFormProps> = ({
  onBackClick,
}: ISignUpFormProps) => {
  const [registerUser] = useMutation<RegisterOutput>(gql` 
  mutation RegisterInput($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      message
    }
  }
  `);

  const [confirmValue, setConfirmValue] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [registerInput, setRegisterInput] = useState<RegisterInput>({
    email: "",
    alias: "",
    color: "",
    password: ""
  })

  const onInputChange = (inputName: string, nv: string) => {
    setRegisterInput({
      ...registerInput,
      [inputName]: nv
    });
  }

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        // validation 
        for (const [key, value] of Object.entries(registerInput)) {
          console.log(key, value, value.length);

          if (value.length <= 0) {
            setErrMessage(`${key} is required`)
            return;
          }
        }

        // password missmatch 
        if (confirmValue.localeCompare(registerInput.password) !== 0) {
          setErrMessage(`The passwords do not match`)
          return;
        }

        registerUser({
          variables: {
            registerInput
          },
        }).then(() => {
          console.log("User registered");
          setErrMessage("");
          onBackClick()
        })
      }}
      autoComplete="false"
    >
      <div className="sign-up-from">
        <h2>Sign up</h2>
        <TextField placeholder="email" type="email" onChange={(nv) => onInputChange("email", nv)} />
        <TextField placeholder="alias" onChange={(nv) => onInputChange("alias", nv)} />
        <p>Choose your color below: </p>
        <ColorPicker defaultColor="#008000" onChange={(nv) => onInputChange("color", nv)} />
        <PasswordField placeholder="password" onChange={(nv) => onInputChange("password", nv)} />
        <PasswordField placeholder="confirm password" onChange={(nv) => setConfirmValue(nv)} />

        <p hidden={errMessage.length <= 0} style={{ color: "red" }}>{errMessage}</p>
        <button type="submit">Sign up</button>
        <button type="button" onClick={() => onBackClick()}>
          Back
        </button>
      </div>
    </form>
  );
};
