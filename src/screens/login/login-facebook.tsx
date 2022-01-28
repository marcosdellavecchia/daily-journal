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
 * Login with Facebook screen
 */

export const LoginFacebook: FunctionComponent = () => {
  return (
    <Container>
      <H1>Login with Facebook</H1>
    </Container>
  );
};
