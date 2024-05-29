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
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Hover01 = css`
&:hover {
  background-color: #33399b;
}
`
export const Hover02 = css`
&:hover {
  color: #33399b;
}
&:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
}
`

export const Hover03 = css`
&:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
&:hover a {
  color: #FFFFFF;
}
`


