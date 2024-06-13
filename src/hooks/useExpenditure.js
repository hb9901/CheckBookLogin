import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import api from "../api/api";
import { MonthContext } from "../context/month.context";

function useExpenditure(enabled = false, initExpenditures) {
  const { curMonth } = useContext(MonthContext);
  const queryClient = useQueryClient();

  const { data: monthExpenditures = initExpenditures } = useQuery({
    queryKey: ["expenditures"],
    queryFn: () => api.expenditure.getExpenditures(),
    enabled,
    initialData: initExpenditures,
    select: (expenditures) =>
      expenditures.filter((expenditure) => expenditure.month === curMonth + 1),
  });

  const { mutateAsync: addExpenditure } = useMutation({
    mutationFn: (expenditure) => api.expenditure.addExpenditure(expenditure),
    onSuccess: () => {
      queryClient.invalidateQueries(["expenditures"]);
    },
  });

  const { mutateAsync: updateExpenditure } = useMutation({
    mutationFn: ({ expenditureId, expenditure }) =>
      api.expenditure.updateExpenditure({ expenditureId, expenditure }),
  });
  const { mutateAsync: deleteExpenditure } = useMutation({
    mutationFn: (expenditureId) =>
      api.expenditure.deleteExpenditure(expenditureId),
  });

  return {
    monthExpenditures,
    addExpenditure,
    updateExpenditure,
    deleteExpenditure,
  };
}

export default useExpenditure;
