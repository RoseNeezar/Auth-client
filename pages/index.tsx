import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { lightStore } from "../app/store/lightStore";

interface IStyle {
  ishover?: boolean;
}
const LayoutIndex = styled.div`
  background-color: ${({ theme }) => theme.color3};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 1.6rem;
  background-color: ${(props: IStyle) => (props.ishover ? "purple" : "#39f")};
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const index = () => {
  const { openLight, setOpenLight } = lightStore;
  return (
    <LayoutIndex>
      <Text onClick={() => setOpenLight(!openLight)}>Hello World</Text>

      {openLight && <Text>BUKAK siniiiiii</Text>}
    </LayoutIndex>
  );
};
export default observer(index);
