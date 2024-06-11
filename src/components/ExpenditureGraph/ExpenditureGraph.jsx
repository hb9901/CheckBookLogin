import { ExpenditureContext } from "@/context/expenditure.context";
import { useContext } from "react";
import styled from "styled-components";
import {
  calPercentage,
  calTotalCost,
  makeCostStr,
  makeGraphItems,
  makeItemsExpenditureList,
  makeItemsExpenditureObj,
} from "./functions";

function ExpenditureGraph() {
  const monthExpenditures = useContext(ExpenditureContext).monthExpenditures;
  const curMonth = useContext(ExpenditureContext).curMonth;
  const TOTAL_COST = calTotalCost(monthExpenditures);
  const totalStr = makeCostStr(TOTAL_COST);
  const itemsExpenditureObj = makeItemsExpenditureObj(monthExpenditures);
  const itemsExpenditureList = makeItemsExpenditureList(itemsExpenditureObj);
  const graphItems = makeGraphItems(itemsExpenditureList);

  return (
    <>
      <Title>{`${curMonth + 1}월 총 지출: ${totalStr} 원`}</Title>
      <Graph>
        {graphItems.map((graphItem, index) => {
          return (
            <GraphItem
              key={index}
              $width={calPercentage(graphItem[1], TOTAL_COST)}
              $index={index}
            />
          );
        })}
      </Graph>
      <Items>
        {graphItems.map((graphItem, index) => {
          return (
            <Item key={index}>
              <ItemColor $index={index} />
              {`${graphItem[0]}: ${makeCostStr(
                graphItem[1]
              )} 원 (${calPercentage(graphItem[1], TOTAL_COST)}%)`}
            </Item>
          );
        })}
      </Items>
    </>
  );
}

export default ExpenditureGraph;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;

  background-color: rgb(255, 255, 255);
`;
const Graph = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;

  height: 40px;
  border-radius: 8px;

  overflow: hidden;

  background-color: rgb(233, 236, 239);
`;

const GraphItem = styled.div`
  height: 100%;
  ${({ $width }) => `width: ${$width}%;`}
  ${({ $index }) => {
    switch ($index) {
      case 0:
        return `background-color: rgb(0, 123, 255);`;
      case 1:
        return `background-color: rgb(40, 167, 69);`;
      case 2:
        return `background-color: rgb(220, 53, 69);`;
      case 3:
        return `background-color: rgb(255, 193, 7);`;
      default:
        return `background-color: rgb(23, 162, 184);`;
    }
  }}
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 20px;
  margin-top: 10px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: bold;
  color: rgb(85, 85, 85);
`;

const ItemColor = styled.div`
  width: 20px;
  height: 10px;

  margin-right: 8px;

  ${({ $index }) => {
    switch ($index) {
      case 0:
        return `background-color: rgb(0, 123, 255);`;
      case 1:
        return `background-color: rgb(40, 167, 69);`;
      case 2:
        return `background-color: rgb(220, 53, 69);`;
      case 3:
        return `background-color: rgb(255, 193, 7);`;
      default:
        return `background-color: rgb(23, 162, 184);`;
    }
  }}
`;
