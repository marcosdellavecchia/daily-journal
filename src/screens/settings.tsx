import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { Colors } from '../core/colors';
import { H1, Body1 } from '../core/typography';

/*
 * Styled Components
 */

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.BLACK};
  align-items: center;
  justify-content: center;
`;

/*
 * Settings Screen
 */

export const Settings: FunctionComponent = () => {
  return (
    <Container>
      <H1>Settings</H1>
      <Body1>Your settings here</Body1>
    </Container>
  );
};
