import styled from "styled-components";
import { SubTitle } from "../../lib/shared.styled";

export const CalendarBlock = styled.div`
  display: block;
`;
export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;
export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;
export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;
export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;

  ${SubTitle}
`;
export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;
export const CalendarNavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: #94a6be;
  }
`;

export const CalendarDateEnd = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  & span {
    color: ${({ theme }) => theme.text};
  }
`;
