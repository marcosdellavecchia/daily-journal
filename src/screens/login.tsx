import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { Colors } from '../core/colors';
import { H1 } from '../core/typography';

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.BLACK};
  align-items: center;
  justify-content: center;
`;

export const Login: FunctionComponent = () => {
  return (
    <Container>
      <H1>Login screen</H1>
    </Container>
  );
};