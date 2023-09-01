import styled from "@emotion/styled";
import { WidthPd } from "../../style/GlobalStyle";

export const StoreAddWrap = styled.div`
  padding: ${WidthPd.padding};
  & > div {
    text-align: right;
    margin-right: 8%;
  }
  margin: 0 auto;
  & ul {
    display: flex;
    justify-content: center;
    margin: 3rem;

    & > li:first-child {
      width: 20%;
    }
    & > li:last-child {
      width: 70%;
    }
  }
`;
