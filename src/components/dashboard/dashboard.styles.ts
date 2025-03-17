import styled from "@emotion/styled";

export const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 10px;
  }
`;
