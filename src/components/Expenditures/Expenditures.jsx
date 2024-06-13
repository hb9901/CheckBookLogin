import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";

import useExpenditure from "../../hooks/useExpenditure";

function Expenditures() {
  const initExpenditures = useLoaderData();
  const { monthExpenditures } = useExpenditure(true, initExpenditures);
  const [category, setCategory] = useState("date");

  monthExpenditures.sort(function compare(a, b) {
    if (a[category] > b[category]) return 1;
    if (a[category] < b[category]) return -1;
    return 0;
  });

  const handleChangeDropMenu = ({ target }) => {
    setCategory(target.value);
  };
  return (
    <>
      <SelectWrapper>
        <Select onChange={handleChangeDropMenu} value={category}>
          <Option value="date">시간순</Option>
          <Option value="item">종류별</Option>
        </Select>
      </SelectWrapper>
      <ExpendituresList>
        {monthExpenditures.map((expenditure) => {
          return (
            <Link
              key={expenditure.id}
              to={`/${expenditure.id}`}
              style={{ textDecorationLine: "none" }}
            >
              <Expenditure>
                <ListLeft>
                  <DateStr>{expenditure.date}</DateStr>
                  <Item>
                    {expenditure.item} - {expenditure.description} (by{" "}
                    {expenditure.createdBy})
                  </Item>
                </ListLeft>
                <ListRight>
                  <Amount>{expenditure.amount} 원</Amount>
                </ListRight>
              </Expenditure>
            </Link>
          );
        })}
      </ExpendituresList>
    </>
  );
}

export default Expenditures;

const SelectWrapper = styled.section`
  display: flex;
  justify-content: end;

  padding-right: 20px;
  padding-bottom: 20px;
`;

const Select = styled.select`
  padding: 5px 10px;

  border-radius: 5px;
  border: 2px solid rgb(0, 123, 255);
  font-weight: bold;

  color: rgb(0, 123, 255);
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;

  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const ExpendituresList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 10px;

  list-style: none;

  padding: 0;
  margin: 0;
`;

const Expenditure = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 20px;
  border-radius: 8px;

  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;

  cursor: pointer;
`;

const ListLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  flex: 1 1 auto;

  white-space: nowrap;
  overflow: hidden;
`;
const ListRight = styled.div`
  flex: 0 0 auto;
`;

const DateStr = styled.div`
  margin-bottom: 5px;

  font-size: 14px;

  color: rgb(102, 102, 102);
`;
const Item = styled.div`
  max-width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: bold;

  color: rgb(0, 123, 255);
`;
const Amount = styled.div`
  font-weight: bold;
  color: rgb(0, 123, 255);
`;
