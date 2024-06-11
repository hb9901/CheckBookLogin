function isInputValidate(expenditure) {
  const isDateInputValidate = (inputValue) => {
    const dateRegExp = /^\d{4}-\d{2}-\d{2}$/;

    return dateRegExp.test(inputValue);
  };

  const isInputLengthValidate = (inputValue) => {
    return inputValue.length > 0;
  };

  const isAmountInputValidate = (inputValue) => {
    const numbRegExp = /^[1-9][0-9]*$/;
    return numbRegExp.test(inputValue);
  };
  
  if (!isDateInputValidate(expenditure.date)) {
    alert("날짜 형식을 YYYY-MM-DD로 입력해주세요!");
    return false;
  } else if (!isInputLengthValidate(expenditure.item)) {
    alert("지출 항목을 적어주세요!");
    return false;
  } else if (!isAmountInputValidate(expenditure.amount)) {
    alert("유효한 금액이 아닙니다!");
    return false;
  } else if (!isInputLengthValidate(expenditure.description)) {
    alert("지출 내용을 적어주세요!");
    return false;
  }
  return true;
}

export default isInputValidate;
