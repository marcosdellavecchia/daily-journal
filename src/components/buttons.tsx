import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Colors } from '../core/colors';
import { BodyBold, BodyBoldAccent } from '../core/typography';

/*
 * Types
 */

type PrimaryButtonProps = {
  label: string;
  accessibilityLabel: string;
  onPress: () => void;
};

/*
 * Styled components
 */

const PrimaryButtonTouchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.ACCENT};
  padding: 10px;
  margin: 8px;
  border-radius: 5px;
  elevation: 3;
  width: 90%;
  height: 50px;
`;

const SecondaryButtonTouchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 8px;
  elevation: 3;
  width: 90%;
  height: 50px;
`;

/*
 * Button
 */

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  label,
  accessibilityLabel,
  onPress,
}) => {
  return (
    <PrimaryButtonTouchable
      activeOpacity={0.5}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
    >
      <BodyBold> {label.toUpperCase()}</BodyBold>
    </PrimaryButtonTouchable>
  );
};

export const SecondaryButton: FunctionComponent<PrimaryButtonProps> = ({
  label,
  accessibilityLabel,
  onPress,
}) => {
  return (
    <SecondaryButtonTouchable
      activeOpacity={0.5}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
    >
      <BodyBoldAccent> {label.toUpperCase()}</BodyBoldAccent>
    </SecondaryButtonTouchable>
  );
};
