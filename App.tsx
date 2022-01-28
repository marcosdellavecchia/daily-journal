import styled from 'styled-components/native';
import * as Font from 'expo-font';
import { Colors } from './src/core/colors';
import { Body1, H1 } from './src/core/typography';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Spacer } from './src/components/spacer';
import { PrimaryButton, SocialIcon } from './src/components/buttons';

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

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Container>
      <HomeImage source={require('./assets/images/home-logo.webp')} />
      <H1>Aurelius</H1>
      <Spacer size="xs" />
      <Body1>Quick journaling to declutter your mind.</Body1>
      <Spacer />
      <PrimaryButton
        label="Sign in with Google"
        accessibilityLabel="Sign in with Google"
        onPress={() => {}}
        icon={SocialIcon.GOOGLE}
      />
      <PrimaryButton
        label="Sign in with Facebook"
        accessibilityLabel="Sign in with Facebook"
        onPress={() => {}}
        icon={SocialIcon.FACEBOOK}
      />
      <Spacer size="xs" />
      <Body1>Or use your email address</Body1>
    </Container>
  );
}
