import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }

  h2 {
    text-align: center;
    margin-top: 40px;
  }
`;

export const ConnectButtonWrapper = styled.div`
  align-self: end;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    align-self: center;
  }
`;
