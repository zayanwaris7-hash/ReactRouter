import React from "react";
import {userContext} from "./userContext";
import { useState } from "react";

export const UserContextProvider= ({children}) => {
   const [user, setuser] = useState("")
   return(
    <userContext.Provider value={{user ,setuser}}>
    {children}
    </userContext.Provider>
   );
}

