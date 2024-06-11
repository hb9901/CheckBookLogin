import { useState } from "react";
import { MonthContext } from "../context/month.context";

function MonthProvider({ children }) {
  const [month, setMonth] = useState(Number(localStorage.getItem("month")));

  const changeMonth = (month) => {
    setMonth(month);
  };

  return (
    <MonthContext.Provider
      value={{
        curMonth: month,
        changeMonth,
      }}
    >
      {children}
    </MonthContext.Provider>
  );
}

export default MonthProvider;
