import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { Colors } from '../core/colors';
import { H1, Body1 } from '../core/typography';

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
 * Journal Screen
 */

export const Journal: FunctionComponent = () => {
  return (
    <Container>
      <H1>Your daily journal</H1>
      <Body1>Your content here</Body1>
    </Container>
  );
};
