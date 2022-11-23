import React, { FC, useEffect, useState } from "react";
import { useLoginService } from "../../hooks";
import "../css/Login.css";
import { LoginIcon, UserIcon } from "../svgs";
import { SidePanel } from "./sidePanel";

export const LoginField = () => {
  
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const {isAuthorized} = useLoginService();

  useEffect(() => console.log("abc", isAuthorized), [isAuthorized])

  return (
    <div className="login-field-container">
      <div className="login-open-dialog" onClick={() => setSidePanelOpen(true)}>
        {isAuthorized ? <UserIcon /> : <LoginIcon /> }
        
      </div>
      <SidePanel
        isOpen={sidePanelOpen}
        onDismiss={() => setSidePanelOpen(false)}
      />
    </div> 
  );
};
