import { FC } from "react";
import "../css/Login.css";
import { CloseIcon } from "../svgs";
import { LoginForm } from "./loginForm";

interface ISidePanelProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export const SidePanel: FC<ISidePanelProps> = ({
  isOpen,
  onDismiss,
}: ISidePanelProps) => {
  return (
    <div className="side-panel" data-open={isOpen}>
      <div className="header">
        {/* <div onClick={() => onDismiss()}>X</div> */}
        <div className="close" onClick={() => onDismiss()}>
          <CloseIcon />
        </div>
      </div>
      <div className="content">
        <LoginForm />
      </div>
    </div>
  );
};
