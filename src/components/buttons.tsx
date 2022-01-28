import React, { FunctionComponent } from 'react';
import { Pressable } from 'react-native';
import { Colors } from '../core/colors';
import styled from 'styled-components';
import { BodyBold } from '../core/typography';
import GoogleIcon from '../../assets/icons/google.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';

/*
 * Types
 */

type PrimaryButtonProps = {
  label: string;
  accessibilityLabel: string;
  onPress: () => void;
  icon?: SocialIcon;
};

export enum SocialIcon {
  GOOGLE = 'GoogleIcon',
  FACEBOOK = 'FacebookIcon',
}

/*
 * Styled components
 */

const Button = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.DARK_GRAY};
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  elevation: 3;
  width: 200px;
`;

/*
 * Button
 */

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  label,
  accessibilityLabel,
  onPress,
  icon,
}) => {
  return (
    <Button accessibilityLabel={accessibilityLabel} onPress={onPress}>
      {icon === SocialIcon.GOOGLE && (
        <GoogleIcon width={18} height={18} fill={Colors.WHITE} />
      )}
      {icon === SocialIcon.FACEBOOK && (
        <FacebookIcon width={18} height={18} fill={Colors.WHITE} />
      )}
      <BodyBold> {label}</BodyBold>
    </Button>
  );
};
