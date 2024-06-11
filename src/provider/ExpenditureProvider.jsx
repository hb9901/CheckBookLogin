import { useState } from "react";
import { ExpenditureContext } from "../context/expenditure.context";
import { initExpenditures } from "./constants";

function ExpenditureProvider({ children }) {
  const [expenditures, setExpenditures] = useState(initExpenditures);
  const [month, setMonth] = useState(Number(localStorage.getItem("month")));

  const monthExpenditures = expenditures.filter((expenditure) => {
    const date = new Date(expenditure.date);
    return date.getMonth() === month;
  });

  const addExpenditure = (expenditure) => {
    setExpenditures((prev) => [...prev, expenditure]);
  };

  const updateExpenditure = (modifiedExpenditure) => {
    setExpenditures((prev) => {
      return prev.map((expenditure) => {
        if (expenditure.id === modifiedExpenditure.id) {
          return modifiedExpenditure;
        } else {
          return expenditure;
        }
      });
    });
  };

  const deleteExpenditure = (id) => {
    setExpenditures((prev) => {
      return prev.filter((expenditure) => expenditure.id !== id);
    });
  };
  return (
    <ExpenditureContext.Provider
      value={{
        monthExpenditures,
        curMonth: month,
        addExpenditure,
        updateExpenditure,
        deleteExpenditure,
        setMonth,
      }}
    >
      {children}
    </ExpenditureContext.Provider>
  );
}

export default ExpenditureProvider;
