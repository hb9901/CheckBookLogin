import jsonApi from "../api/jsonApi";

async function expenditureLoader() {
  const expenditures = await jsonApi.expenditures.getExpenditures();

  return expenditures;
}

export default expenditureLoader