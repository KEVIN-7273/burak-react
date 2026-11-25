import React, { ReactNode, useState } from "react";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../hooks/useGlobal";

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authMember, setAuthMember] = useState<Member | null>(() => {
    const memberData = localStorage.getItem("memberData");

    return memberData ? JSON.parse(memberData) : null;
  });

  const [orderBuilder, setOrderBuilder] = useState<Date>(new Date());

  return (
    <GlobalContext.Provider
      value={{ authMember, setAuthMember, orderBuilder, setOrderBuilder }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

function newDate(): Date | (() => Date) {
  throw new Error("Function not implemented.");
}
