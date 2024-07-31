import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubTitle = css`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;
export const Hover02 = css`
  &:hover {
    color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const Hover03 = css`
  &:hover {
    background-color: ${({ theme }) => theme.hover03};
    color: #ffffff;
  }
  &:hover a {
    color: #ffffff;
  }
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const CalendsrCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;


