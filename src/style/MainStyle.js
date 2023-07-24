import styled from "@emotion/styled";

export const VisualWrap = styled.div`
  background: pink;
  height: 55vh;
  border-radius: 0 0 0 100px;
  overflow: hidden;
  isolation: isolate;
  .swiper {
    height: 100%;
    .txtbox {
      & > div {
        span {
        }
        p {
          font-weight: 900;
        }
      }
    }
  }
`;
