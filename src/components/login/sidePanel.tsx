import { FC, useState } from "react";
import "../css/Login.css";
import { CloseIcon, UserIcon } from "../svgs";
import { LoginForm } from "./loginForm";
import { SignUpForm } from "./signUpForm";

interface ISidePanelProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export const SidePanel: FC<ISidePanelProps> = ({
  isOpen,
  onDismiss,
}: ISidePanelProps) => {
  const [signUpMode, setSignUpMode] = useState(false);
  return (
    <div className="side-panel" data-open={isOpen}>
      <div className="header">
        {/* <div onClick={() => onDismiss()}>X</div> */}
        <div className="close" onClick={() => onDismiss()}>
          <CloseIcon />
          <UserIcon />
        </div>
      </div>
      <div className="content">
        {signUpMode ? (
          <SignUpForm onBackClick={() => setSignUpMode(false)} />
        ) : (
          <LoginForm onSignUpClick={() => setSignUpMode(true)} />
        )}
      </div>
    </div>
  );
};
