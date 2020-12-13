import styled from "styled-components";

const LayoutIndex = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.delete};
`;
const Text = styled.div`
  font-size: 1.6rem;
`;
export default function Alternate() {
  return (
    <LayoutIndex>
      <Text>Alternate Page</Text>
    </LayoutIndex>
  );
}
