import React, { FC, useState } from "react";
import "../css/Login.css";
import { LoginIcon } from "../svgs";
import { SidePanel } from "./sidePanel";

export const LoginField = () => {
  
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  return (
    <div className="login-field-container">
      <div className="login-open-dialog" onClick={() => setSidePanelOpen(true)}>
        <LoginIcon />
      </div>
      <SidePanel
        isOpen={sidePanelOpen}
        onDismiss={() => setSidePanelOpen(false)}
      />
    </div> 
  );
};
