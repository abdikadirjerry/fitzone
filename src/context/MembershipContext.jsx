import { createContext, useContext, useState } from "react";

const MembershipContext = createContext(null);

export function MembershipProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const openMembership = (plan, cycle = "monthly") => {
    setSelectedPlan(plan);
    setBillingCycle(cycle);
  };

  const closeMembership = () => {
    setSelectedPlan(null);
  };

  return (
    <MembershipContext.Provider
      value={{
        selectedPlan,
        billingCycle,
        openMembership,
        closeMembership,
        setBillingCycle,
      }}
    >
      {children}
    </MembershipContext.Provider>
  );
}

export function useMembership() {
  const context = useContext(MembershipContext);

  if (!context) {
    throw new Error("useMembership must be used inside a MembershipProvider");
  }

  return context;
}
