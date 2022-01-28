import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Colors } from '../../src/core/colors';
import { Body1, H1 } from '../../src/core/typography';
import { Spacer } from '../../src/components/spacer';
import { PrimaryButton, SocialIcon } from '../../src/components/buttons';

/*
 * Types
 */

interface HomeProps {
  navigation: any;
}

/*
 * Styled components
 */

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.BLACK};
  align-items: center;
  justify-content: center;
`;

const HomeImage = styled.Image`
  height: 350px;
  width: 350px;
`;

/*
 * Home Screen
 */

export const Home: FunctionComponent<HomeProps> = ({
  navigation: { navigate },
}) => {
  return (
    <Container>
      <HomeImage source={require('../../assets/images/home-logo.webp')} />
      <H1>Aurelius</H1>
      <Spacer size="xs" />
      <Body1>Quick journaling to declutter your mind.</Body1>
      <Spacer />
      <PrimaryButton
        label="Sign in with Google"
        accessibilityLabel="Sign in with Google"
        onPress={() => navigate('LoginGoogle')}
        icon={SocialIcon.GOOGLE}
      />
      <PrimaryButton
        label="Sign in with Facebook"
        accessibilityLabel="Sign in with Facebook"
        onPress={() => navigate('LoginFacebook')}
        icon={SocialIcon.FACEBOOK}
      />
      <Spacer size="xs" />
      <TouchableOpacity onPress={() => navigate('LoginEmail')}>
        <Body1>Or use your email address</Body1>
      </TouchableOpacity>
    </Container>
  );
};
