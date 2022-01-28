import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components';

/*
 * Constants
 */

const MEASURES = {
  xl: `64px`,
  l: `48px`,
  m: `24px`,
  s: `16px`,
  xs: `8px`,
};

/*
 * Types
 */

export type SpacerSizes = keyof typeof MEASURES;

/*
 * Styled components
 */

const View = styled.View<{ size: SpacerSizes }>`
  height: ${({ size }) => MEASURES[size]};
`;

interface SpacerProps extends ViewProps {
  size?: SpacerSizes;
}

/*
 * Spacer
 */

export const Spacer: FunctionComponent<SpacerProps> = ({ size = 'm' }) => (
  <View size={size} />
);
