import BasicInput from "@/components/common/BasicInput";
import { styled } from "styled-components";

const Frame = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Input = styled(BasicInput)`
  width: 100%;
  padding-right: 7rem; /* 오른쪽 텍스트를 위한 공간 확보 */
  text-align: left;
  padding-left: 1rem;
  font-size: 1rem;
`;

const Text = styled.span`
  position: absolute;
  right: 1rem; /* 오른쪽 가장자리에서부터의 거리 */
  color: #666;
`;

interface Props {
  text: string;
}

const InputWithText = ({ text }: Props) => (
  <Frame>
    <Input />
    <Text>{text}</Text>
  </Frame>
);

export default InputWithText;
