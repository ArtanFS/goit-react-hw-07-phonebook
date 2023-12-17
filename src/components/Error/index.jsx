import { Text, Wrapper } from './Error.styled';

const Error = ({ err }) => {
  return (
    <Wrapper>
      <Text>An error occurred: {err}</Text>
    </Wrapper>
  );
};

export default Error;
