export function calTotalCost(monthExpenditures) {
  let total = 0;

  monthExpenditures.forEach((expenditure) => {
    total += Number(expenditure.amount);
  });

  return total;
}

export function makeCostStr(cost) {
  return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function makeItemsExpenditureObj(monthExpenditures) {
  const itemsExpenditureObj = {};

  monthExpenditures.forEach((expenditure) => {
    const { item, amount } = expenditure;

    if (itemsExpenditureObj[item]) itemsExpenditureObj[item] += amount;
    else itemsExpenditureObj[item] = amount;
  });

  return itemsExpenditureObj;
}

export function makeItemsExpenditureList(itemsExpenditureObj) {
  let itemsExpenditureList = [];

  itemsExpenditureList = Object.entries(itemsExpenditureObj).sort(
    (a, b) => b[1] - a[1]
  );

  return itemsExpenditureList;
}

export function makeGraphItems(itemsExpenditureList) {
  const items = [];
  let etcTotal = 0;

  itemsExpenditureList.forEach((itemExpenditure, index) => {
    if (index < 4) {
      items.push(itemExpenditure);
    } else {
      etcTotal += itemExpenditure[1];
    }
  });

  return itemsExpenditureList.length >= 4
    ? [...items, ["기타", etcTotal]]
    : itemsExpenditureList;
}
export function calPercentage(cost, TOTAL_COST) {
  const percentage = (cost / TOTAL_COST) * 100;
  return Math.round(percentage * 100) / 100;
}
