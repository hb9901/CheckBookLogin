import api from "../api/api";

async function expenditureLoader() {
  const expenditures = await api.expenditure.getExpenditures();

  return expenditures;
}

export default expenditureLoader