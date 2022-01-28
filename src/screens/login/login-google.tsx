import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { Colors } from '../../core/colors';
import { H1 } from '../../core/typography';

/*
 * Styled components
 */

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.BLACK};
  align-items: center;
  justify-content: center;
`;

/*
 * Login with Google screen
 */

export const LoginGoogle: FunctionComponent = () => {
  return (
    <Container>
      <H1>Login with Google</H1>
    </Container>
  );
};
