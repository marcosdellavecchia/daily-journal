import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { Colors } from '../../src/core/colors';
import { Body1, Body2, H1 } from '../../src/core/typography';
import { Spacer } from '../../src/components/spacer';
import { PrimaryButton, SecondaryButton } from '../../src/components/buttons';
import { TouchableOpacity } from 'react-native';

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
  navigation: { navigate, reset },
}) => {
  return (
    <Container>
      <HomeImage source={require('../../assets/images/home-logo.webp')} />
      <H1>Aurelius</H1>
      <Spacer size="xs" />
      <Body1>Quick journaling to declutter your mind.</Body1>
      <Spacer size="xl" />
      <PrimaryButton
        label="Register"
        accessibilityLabel="Register"
        onPress={() => navigate('Register')}
      />
      <SecondaryButton
        label="Log in"
        accessibilityLabel="Log in"
        onPress={() => navigate('Login')}
      />
      <TouchableOpacity
        onPress={() => reset({ index: 0, routes: [{ name: 'LoggedStack' }] })}
      >
        <Body2>Or press here if you are dev.</Body2>
      </TouchableOpacity>
    </Container>
  );
};
