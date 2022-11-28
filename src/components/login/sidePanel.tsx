import { FC, useState } from "react";
import "../css/Login.css";
import { CloseIcon } from "../svgs";
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
        <div className="close" onClick={() => onDismiss()}>
          <CloseIcon />
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
